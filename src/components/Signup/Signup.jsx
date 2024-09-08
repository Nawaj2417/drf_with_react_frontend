import React from 'react'
import Signupleft from './Signupleft'
import Loginimage from '../Login/Loginimage'

const Signup = () => {
  return (
    <section className= " border-red-500 bg-gray-200 py-20 flex items-center justify-center">
    <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
     <Signupleft />
     <Loginimage />
    </div>
  </section>
  )
}

export default Signup
