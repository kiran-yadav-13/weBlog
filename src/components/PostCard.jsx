import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import appwriteService from "../appwrite/config";

function PostCard({ $id, title, featuredImage, content }) {
  const [imgError, setImgError] = useState(false);

  const previewSrc = featuredImage
    ? appwriteService.getFilePreview(featuredImage)
    : null;

  console.log("previewSrc", previewSrc);
  const excerpt = content
    ? content.replace(/<[^>]+>/g, "").trim().slice(0, 140)
    : "";

  return (
    <Link to={`/post/${$id}`} className="block focus:outline-none">
      <motion.article
        className="card-pink-glow overflow-hidden border border-transparent transition-shadow duration-200 ease-out"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6 }}
        layout
      >
        {previewSrc && !imgError ? (
          <div className="w-full h-48 md:h-56 bg-gray-100 overflow-hidden">
            <img
              src={previewSrc}
              alt={title || "Post image"}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover block"
            />
          </div>
        ) : (
          <div className="w-full h-48 md:h-56 bg-gradient-to-br from-page-bg to-white flex items-center justify-center">
            <span className="font-medium text-aurora-text px-4 text-center">
              {title}
            </span>
          </div>
        )}

        <div className="p-4">
          <h3 className="text-lg font-serif font-semibold text-aurora-text mb-2 line-clamp-2">
            {title}
          </h3>

          <p className="text-sm text-aurora-muted mb-4 line-clamp-3">
            {excerpt}
            {excerpt.length >= 140 && "…"}
          </p>

          <div className="flex justify-end">
            <button className="px-3 py-1 text-sm font-medium rounded-md btn-gradient transition-all duration-150 hover:scale-105">
              Read More
            </button>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

export default PostCard;
