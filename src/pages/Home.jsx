import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import AllPosts from './AllPosts';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import Loading from '../components/Loading';

function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])


  
    // if (posts.length === 0) {
    //     return (
    //         <div className="w-full ">
    //             <Container>
    //                 <div className="flex flex-wrap">
    //                     <div className="w-full">
                           
    //                           <Loading />
                            
                            
    //                     </div>
    //                 </div>
    //             </Container>
    //         </div>
    //     )
    // }

    //     if (posts.length === 0) {
    //     return (
    //         <div className='w-full h-full flex justify-center items-center'>
    //             {/* <Loading /> */}
    //         </div>
    //     )
    // }

    return (
        <div className='w-full sm:py-1 md:py-4 md:pt-10'>
        
            <div className="w-full sm:py-1 md:py-8 mt-4 ">
                <Container>
                    <div className="flex flex-wrap">
                        <div className=" w-full">
                            <h1 className=" text-center text-gray-500 font-semibold  hover:text-gray-900 text-[min(4vw,1.5rem)] leading-2">
                               NOTE : To Add new post or to edit your post please Login/Signup
                               
                            </h1>
                    
                            <AllPosts />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Home;