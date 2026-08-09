import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router';
import { Auth } from '../context/AuthContext';

const ProtectedRouter = ({children}) => {
    
    const {loggedInUser} = useContext(Auth);
    if (!loggedInUser) {
      return  <Navigate to={"/"} />
       
    }
  return children
}

export default ProtectedRouter;
