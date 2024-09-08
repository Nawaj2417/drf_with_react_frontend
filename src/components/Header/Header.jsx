import React from 'react'
import Logo from './Logo'
import Navlinks from './Navlinks'
import Loginbtn from './Loginbtn'

const Header = () => {
  return (
    <header className="bg-red-200 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Logo />
        <Navlinks />
        <Loginbtn />
      </div>
    </header>
  )
}

export default Header