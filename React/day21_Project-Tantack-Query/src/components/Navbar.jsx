import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className='flex px-2 py-6 bg-amber-400 justify-between items-center'>
      <div>Logo</div>
      <div className='flex gap-5'>
        <NavLink className={({isActive}) => isActive? "text-white font-semibold": "text-black"} end to={"/main"}>Home</NavLink>
        <NavLink className={({isActive}) => isActive? "text-white font-semibold": "text-black"} to={"/main/shop"}>Shop</NavLink>
        <NavLink className={({isActive}) => isActive? "text-white font-semibold": "text-black"} to={"/main/about"}>About</NavLink>
      </div>
      <div className='flex gap-2 items-center'>
        <h1>Hey, Vaibhav</h1>
        <button className='bg-emerald-400 rounded-xl px-2 py-1'>Cart</button>
      </div>
    </div>
  );
}
1
export default Navbar;
