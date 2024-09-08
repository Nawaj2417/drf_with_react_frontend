import React from 'react'
import Loginimage from '../Login/Loginimage'
import Forgotpasswordleft from './Forgotpasswordleft'

const Forgotpassword = () => {
  return (
    <section className= " border-red-500 bg-gray-200 py-20 flex items-center justify-center">
    <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
     <Forgotpasswordleft />
     <Loginimage />
    </div>
  </section>
  )
}

export default Forgotpassword
