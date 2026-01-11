import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { motion } from 'framer-motion'

 function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <motion.div className="flex justify-center pt-6 page-bg" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <div className="sm:py-8 md:py-12 sm:w-full md:w-10/12">
            <Container>
                <div className="w-full flex justify-center md:mb-6 relative">
                    <div className="w-full rounded-xl card-pink-glow overflow-hidden bg-[var(--color-surface)]">
                            <div className="w-full h-[18rem] md:h-[32rem] relative overflow-hidden">
                                <img
                                    src={appwriteService.getFilePreview(post.featuredImage)}
                                    alt={post.title}
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                            </div>
                            <div className="p-6">
                            <h1 className="font-serif font-semibold text-[clamp(1.6rem,5vw,2.2rem)] text-aurora-text mb-2">{post.title}</h1>
                                <div className="browser-css mt-4 prose max-w-none text-aurora-text">
                                {parse(post.content)}
                            </div>
                            <div className="mt-8 border-t pt-6 text-center">
                                <p className="text-aurora-muted">Enjoyed this story? Share it with others.</p>
                                <div className="mt-3 flex items-center justify-center gap-3">
                                    <Button className='px-4 py-2'>Share</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {isAuthor && (
                        <div className="absolute right-6 top-6 flex">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    <span> <FaEdit /></span>
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                               <MdDeleteForever />
                            </Button>
                        </div>
                    )}
                </div>
            </Container>
        </div>
        </motion.div>
    ) : null;
}

export default Post
