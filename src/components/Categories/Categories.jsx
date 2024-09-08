import React from 'react'
import Blogcard2 from '../Home/Blogcard2'

const Categories = () => {
  return (
    <div className='px-8 py-6'>
      <h1 className='text-3xl font-bold px-4 py-2 text-center'>Sports</h1>
      <div className="posts flex flex-wrap justify-center  ">
        <Blogcard2 />
        <Blogcard2 />
        <Blogcard2 />
        <Blogcard2 />
      </div>
    </div>
  )
}

export default Categories
