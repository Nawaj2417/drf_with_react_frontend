import React from 'react'
import parse from "html-react-parser"
const Blogcarddetail = ({latestpost}) => {
  return (
    <div className="md:flex-grow">
    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{latestpost?.title}</h2>
    <p className="leading-relaxed">{latestpost && parse(latestpost?.content)}</p>
    <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    </a>
  </div>
  )
}

export default Blogcarddetail