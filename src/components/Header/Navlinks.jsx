import { NavLink } from "react-router-dom"

const Navlinks = () => {
  return (
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <NavLink to="/" className={({isActive})=>`mr-5 hover:text-gray-900 ${isActive ? "text-orange-500" : "text-black"}`}>Home</NavLink>
    <NavLink to="/categories" className={({isActive})=>`mr-5 hover:text-gray-900 ${isActive ? "text-orange-500" : "text-black"}`}>Category</NavLink>
    <NavLink to="/createpost" className={({isActive})=>`mr-5 hover:text-gray-900 ${isActive ? "text-orange-500" : "text-black"}`}>CreatePost</NavLink>
    {/* <NavLink to="/" className="mr-5 hover:text-gray-900"></NavLink> */}
  </nav>
  )
}

export default Navlinks