import React from 'react'

const Loginbutton = ({text,className}) => {
  return (
    <div>
       <button  className={` ${className}`}>{text}</button>
    </div>
  )
}

export default Loginbutton
