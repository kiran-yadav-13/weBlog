import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

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
        <div className="flex justify-center pt-4 ">
        <div className="sm:py-8 md:py-12  sm:w-full md:w-10/12  ">
            <Container >
                <div className="w-full  flex justify-center md:mb-4 relative border rounded-xl   back">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}

                        className="w-full min-h-[10rem] md:h-[23rem] rounded-xl object-fill shadow-xl shadow-gray-400 "
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6 ">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3 ">
                               <span> <FaEdit /></span>
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                               <MdDeleteForever />
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full p-4 text-gray-500">
                <div className="md:mb-6  text-gray-700  ">
                    <h1 className="font-semibold font-sans tracking-wide text-[min(6vw,1.8rem)] md:leading-10">{post.title}</h1>
                </div>
                <div className="browser-css md:p-4 font-sans text-xl text-[min(3vw,1.5rem)] md:leading-10">
                    {parse(post.content)}
                    </div>
               </div>
            </Container>
        </div>
        </div>
    ) : null;
}

export default Post
