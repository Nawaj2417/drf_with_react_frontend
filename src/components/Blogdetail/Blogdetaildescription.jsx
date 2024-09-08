import React from 'react'
import parse from 'html-react-parser'
const Blogdetaildescription = ({discriptions}) => {
  return (
   
    <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
      {discriptions  && parse(discriptions)}

  </div>
  )
}

export default Blogdetaildescription
