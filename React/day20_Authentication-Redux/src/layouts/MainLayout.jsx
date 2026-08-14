import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className='flex flex-col gap-5 text-2xl'>
      <nav className='flex bg-amber-400 p-4 text-2xl  justify-between'>
        <div>Logo</div>
        <div>Home</div>
        <div>Login</div>
      </nav>
      <Outlet/>
    </div>
  );
}

export default MainLayout;
