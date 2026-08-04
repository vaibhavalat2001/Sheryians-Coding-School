import React from 'react'
import { NavLink, Outlet } from 'react-router'

const Home = () => {
  return (
    <div>
      <div>This is home page</div>
      <NavLink to={"details"}>click to to details page</NavLink>
      <Outlet/>
    </div>
  )
}

export default Home
