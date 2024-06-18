import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import parse from "html-react-parser"
function PostCard({$id, title, featuredImage,content}) {
 
   
  return (
    <Link to={`/post/${$id}`}>
        <div className=' sm:w-50 md:w-50 lg:w-96   bg-gray-100 rounded-xl px-0 pt-0 shadow-xl shadow-gray-400 hover:scale-95 transition-all duration-200 pb-2 border-white border-2'>
            <div className='w-full  '>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl mb-2 w-full h-[14rem] pt-0 ' />

            </div>
            <h2
            className='px-4 text-xl font-semibold text-gray-700 mb-2 text-[min(5vw,1.3rem)]'
            >{title}</h2>
            <div className='text-sm px-4 text-wrap text-clip text-[min(3vw,1rem)] '>
           { parse(content).slice(0,2)}
           <span className='text-blue-100'>read more......</span>
            </div>
        </div>
    </Link>
  )
}


export default PostCard