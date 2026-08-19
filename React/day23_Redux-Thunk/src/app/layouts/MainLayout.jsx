import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className='bg-black text-2xl p-3 px-6 flex flex-col gap-4 text-white h-screen'>
        navbar
      <Outlet/>
    </div>
  );
}

export default MainLayout;
