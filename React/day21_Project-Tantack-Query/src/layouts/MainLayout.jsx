import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div className='flex bg-zinc-800 flex-col text-2xl'>
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default MainLayout;
