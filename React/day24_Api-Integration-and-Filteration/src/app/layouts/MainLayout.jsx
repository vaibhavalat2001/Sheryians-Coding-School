import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../shared/ui/components/Navbar';

const MainLayout = () => {
  return (
    <div className='bg-black -mb-6 min-h-screen text-2xl flex flex-col text-white'>
        <Navbar/>
      <Outlet/>
    </div>
  );
}

export default MainLayout;
