import React from 'react'

const Blogcardimg = ({latestpostimg}) => {
  return (
    <div className="md:w-[450px] md:mb-0 mb-6 flex-shrink-0 flex flex-col rounded-xl overflow-hidden">
     <img src={latestpostimg} alt="" className='w-full h-full' />
    </div>
  )
}

export default Blogcardimg