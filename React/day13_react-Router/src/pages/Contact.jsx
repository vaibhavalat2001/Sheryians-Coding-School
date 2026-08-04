import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router'

const Contact = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div>This is contact page</div>
      <button  className='text-red-500' onClick={() => navigate("nested")}>Nested contact</button>
      <Outlet/>
    </div>
  )
}

export default Contact
