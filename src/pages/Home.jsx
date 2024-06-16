import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import AllPosts from './AllPosts';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"

function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])


  
    if (posts.length === 0) {
        return (
            <div className="w-full py-2 mt-2">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-1 w-full">
                            <h1 className="text-xl  text-center font-semibold text-gray-500 hover:text-gray-600">
                               NOTE : Login to Add new post or to edit your post
                            </h1>
                            <AllPosts />
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
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
// function Home() {
//     const [posts, setPosts] = useState([])

//     const authStatus = useSelector(state => state.auth.status)

//     useEffect(() => {
//         appwriteService.getPosts().then((posts) => {
//             if (posts) {
//                 setPosts(posts.documents)
//             }
//         })
//     }, [])

//     if (posts.length == 0 && !authStatus) {
//         return (
//             <div className='w-full py-8 mt-4 text-center'>
//                 <Container>
//                     <div className='min-h-[50vh] flex flex-wrap'>
//                         <div className='p-2 w-full'>
//                             <h1 className='text-2xl font-bold mb-4 font-mono'>
//                                 SignUp / Login to read posts
//                             </h1>
//                             <div className='flex flex-col gap-6'>
//                                 <Link to='/signup'>
//                                     <button bgColor='bg-primary'>
//                                     Signup
//                                     </button>
//                                 </Link>
//                                 <Link to='/login'>
//                                     <button bgColor='bg-primary'>
//                                     Login
//                                     </button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         )
//     }

//     if (posts.length === 0 && authStatus) {
//         return (
//             <div className='h-[70vh] flex justify-center items-center'>
//                 <Skeleton />
//             </div>
//         )
//     }

//     return (
//         <div className='w-full py-2 bg-background md:pt-10'>
//             <div className='w-full max-w-8xl mx-auto px-4'>
//                 <div className='w-full flex flex-wrap justify-center'>
//                     {
//                     posts.map((post) => (
//                         <div key={post.$id} className='p-2 hover:scale-95 transition-all duration-200'>
//                             <PostCard post={post}/>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }


export default Home