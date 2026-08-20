import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../shared/ui/components/Navbar';

const MainLayout = () => {
  return (
    <div className='bg-black min-h-screen text-2xl p-2 flex flex-col gap-4 text-white'>
        <Navbar/>
      <Outlet/>
    </div>
  );
}

export default MainLayout;
