import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div className='flex flex-col gap-5 text-2xl'>
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default MainLayout;
