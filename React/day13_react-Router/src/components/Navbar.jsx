import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex gap-5 p-4 justify-between bg-blue-500'>
      <h1>logo</h1>
      <div className='flex gap-3'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
      <h1>login</h1>
    </div>
  )
}

export default Navbar
