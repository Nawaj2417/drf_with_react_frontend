import React from 'react'
import Logininput from '../Login/Logininput'
import Loginbutton from '../Login/Loginbutton'
import { Link } from 'react-router-dom'

const Forgotpasswordleft = () => {
  return (
    <div className="md:w-1/2 px-5">
    <h2 className="text-2xl font-bold text-[#002D74]">Forgot Password</h2>
    
    <form className="mt-6" action="#" method="POST">
    <Logininput type="email" label = "enter  your email address" placeholder = "enter your email" />
    
     <Loginbutton text="Submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
        px-4 py-2 mt-6 capitalize" />

    </form>
    <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
      <hr className="border-gray-500" />
      <p className="text-center text-sm">OR</p>
      <hr className="border-gray-500" />
    </div>
 
   
    <div className="text-sm flex justify-between items-center mt-3">
      <p>If you Remember the password then</p>
  
     <Link to="/login">
     <Loginbutton text="Login" className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400 " />
     </Link>
    </div>
  </div>
  )
}

export default Forgotpasswordleft
