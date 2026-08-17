import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import { Auth } from '../context/AuthContext';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-violet-50 via-purple-100 to-indigo-200">
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default MainLayout;
