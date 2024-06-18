import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import { ProductShimmer } from '../components/Shimmer';
import Post from './Post';

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [filteredPost, setFilteredPost]=useState()
    const [searchText, setSearchText] = useState()

    // console.log(parse(posts[0]?.content) )
    useEffect(() => {
        console.log("cannot get post")
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
                setFilteredPost(posts.documents)
            }
        })
        console.log("cannot get post")

    }, [])
    
    
//   return posts.length===0 ? <ProductShimmer /> : (
return(
    <div className='w-full py-8 '>
        <div className='flex  mb-4 justify-center "'>
        <input 
        type='text'
        className="border border-y-1 border-gray-400 border-r-0 rounded-md rounded-r-none sm:py-1 md:py-2 w-2/5 md:px-2 "
        placeholder='Search the Blogs'
        value={searchText}
        onChange={(e) => {
            setSearchText(e.target.value)
        }}
         />

         <button className='btn btn-primary d-flex'
            onClick={() => {
                const filteredSearch = posts.filter((post) => (
                    post.title.toLowerCase().includes(searchText.toLowerCase())
                ))

                filteredSearch.length? setFilteredPost(filteredSearch):null
            }}
         >
            <span className=' bg-cyan-500 py-[0.2rem] md:py-3  px-[1rem] rounded-md rounded-l-none text-white text-[2vw, 0.7rem)] hover:bg-cyan-400'>
                Search
            </span>
         </button>
        </div>


        <Container>
            <div className='flex flex-wrap justify-evenly'>
                {filteredPost?.map((post) => (
                    
                    <div key={post.$id} className='m-2 sm:m-1'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts