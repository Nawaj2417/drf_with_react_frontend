import React from 'react'

const BlogdetailImage = ({blogimage}) => {
  return (
    <div className='w-full h-[400px]'>
      <img src={blogimage} className="w-full h-full object-cover lg:rounded" />
    </div>
  )
}

export default BlogdetailImage
