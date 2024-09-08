import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footerlinks = ({links,header}) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">{header}</h2>
    <nav className="list-none mb-10">
   {links && links.map((link)=>{
    return    <li>
    <NavLink to={`/${link == "home" ? "":link}`} className={({isActive})=>` hover:text-gray-800 ${isActive ? "text-orange-500": "text-gray-600"}`}>{link}</NavLink>
  </li>
   })}
 
    </nav>
  </div>
  )
}

export default Footerlinks