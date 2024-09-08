import React from 'react'
import Blogcardimg from './Blogcardimg'
import Blogcarddetail from './Blogcarddetail'
import { Link } from 'react-router-dom'

const Blogcard = ({latestpost}) => {
  return (
<Link to={`/blogdetail/${latestpost ?.slug}_${latestpost.id}`}>
    <div className="py-8 flex flex-wrap md:flex-nowrap gap-10 shadow-xl  px-4 rounded-md">
<Blogcardimg latestpostimg={latestpost ?.image} />
<Blogcarddetail latestpost={latestpost} />
  </div>
</Link>
  )
}

export default Blogcard