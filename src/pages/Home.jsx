import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard, Button} from '../components'
import AllPosts from './AllPosts';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import Loading from '../components/Loading';
import { motion } from 'framer-motion'

function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector((state) => state.auth.status)
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
                <div className='w-full page-bg'>
                    <motion.section className='w-full py-12'>
                        <Container>
                            <div className='max-w-3xl mx-auto text-center'>
                                <h1 className='font-serif text-[clamp(2rem,6vw,3rem)] font-semibold text-aurora-text'>Write. Share. Inspire.</h1>
                                <p className='mt-4 text-aurora-muted text-lg'>A modern space for thinkers, storytellers, and creators to publish their ideas beautifully.</p>
                                <div className='mt-6 flex items-center justify-center gap-4'>
                                    {authStatus ? (
                                        <Link to="/add-post"><button className='px-6 py-3 bg-[#f7b0b0] text-black rounded-md shadow-sm hover:brightness-95'>Start Writing</button></Link>
                                    ) : (
                                        <Link to="/signup"><button className='px-6 py-3 bg-[#f7b0b0] text-black rounded-md shadow-sm hover:brightness-95'>Start Writing</button></Link>
                                    )}
                                    <Link to="/all-posts" className='text-aurora-muted hover:underline'>Explore stories</Link>
                                </div>
                            </div>
                        </Container>
                    </motion.section>

                    <section className="w-full py-8 mt-4">
                        <Container>
                            <div className='w-full'>
                                <h2 className='text-2xl font-semibold text-aurora-text mb-4'>Featured Stories</h2>
                                <AllPosts  />
                            </div>
                        </Container>
                    </section>
                </div>
    )
}

export default Home;