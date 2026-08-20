import React from 'react';
import { NavLink, Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div>
      <nav className='flex p-4 justify-between bg-orange-400 text-2xl'>
        <div>Logo</div>
        <div className='flex text-white curos-point gap-4'>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
        <div>Login</div>
      </nav>
      
      <Outlet/>
    </div>
  );
}

export default MainLayout;
