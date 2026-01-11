import React from 'react'

export default function PostSkeleton(){
  return (
    <div className='bg-white rounded-xl shadow-sm overflow-hidden animate-pulse'>
      <div className='w-full h-48 bg-gray-200'></div>
      <div className='p-4'>
        <div className='h-5 bg-gray-200 rounded w-3/4 mb-3'></div>
        <div className='h-3 bg-gray-200 rounded w-full mb-2'></div>
        <div className='h-3 bg-gray-200 rounded w-5/6 mb-2'></div>
        <div className='h-8 bg-gray-200 rounded w-24 mt-4'></div>
      </div>
    </div>
  )
}
