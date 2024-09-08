import {Link} from "react-router-dom"
import { IoMdBasketball } from "react-icons/io";
const Logo = () => {
  return (
    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
 <IoMdBasketball size={30}   />
    <span className="ml-3 text-xl">DailyBlogs</span>
  </Link>
  )
}

export default Logo