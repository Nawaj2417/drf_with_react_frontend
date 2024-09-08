import React from 'react'
import Logo from '../Header/Logo'
import Footersociallink from './Footersociallink'

const Footerlastpart = () => {
  return (
    <div className="bg-gray-100">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">

      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2024 All Right Reserved by Dailyblogs 
      
      </p>
  <Footersociallink />
    </div>
  </div>
  )
}

export default Footerlastpart