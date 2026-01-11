import React, {useState, useEffect} from 'react'
import { Container, PostCard, Button } from '../components'
import appwriteService from "../appwrite/config";
import { ProductShimmer } from '../components/Shimmer';
import Post from './Post';
import { AiOutlineSearch } from 'react-icons/ai'
import PostSkeleton from '../components/PostSkeleton'

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [filteredPost, setFilteredPost]=useState()
    const [searchText, setSearchText] = useState()

    // console.log(parse(posts[0]?.content) )
    useEffect(() => {
        console.log("cannot get post")
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                console.log(posts.documents)
                setPosts(posts.documents)
                setFilteredPost(posts.documents)
            }
        })
        console.log("cannot get post")

    }, [])
    
    
return(
    <div className='w-full  py-8 page-bg '>
<Container className=" ">
  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mt-20 mb-14">

    {/* LEFT: Text Section (fixed, never shrinks) */}
    
    <div className="md:max-w-md shrink-0">
      <h1 className="text-3xl font-semibold text-aurora-text">
        All Stories
      </h1>
      <p className="text-aurora-muted mt-1">
        Discover perspectives, experiences, and knowledge from our community.
      </p>
    </div>

    {/* RIGHT: Search Section */}
    <div className="w-full md:max-w-xl lg:max-w-2xl">
      
      {/* Cool text above search */}
      

      <div className="flex items-center">
        <input
          type="text"
          className="flex-1 border border-aurora-border rounded-l-md px-4 py-2"
          placeholder="Search stories, topics, authors..."
          value={searchText || ''}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button className="rounded-r-md px-6">
          Search
        </Button>
      </div>
    </div>

  </div>
</Container>


        <Container>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                
                {filteredPost?.length ? filteredPost.map((post) => (
                    <div key={post.$id} className='m-0'>
                        <PostCard {...post} />
                    </div>
                )) : Array.from({length:6}).map((_,i) => (
                    <PostSkeleton key={i} />
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts