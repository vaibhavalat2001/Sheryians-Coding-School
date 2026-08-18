import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthProtected from './protected/AuthProtected';
import AuthLayout from '../app/layouts/AuthLayout';
import RegisterPage from '../features/auth/ui/pages/RegisterPage';
import MainProtected from './protected/MainProtected';
import MainLayout from '../app/layouts/MainLayout';
import HomePage from '../shared/pages/HomePage';
import ProductPage from '../features/product/ui/pages/ProductPage';
import OrderPage from '../features/order/ui/pages/OrderPage';
import CartPage from '../features/cart/ui/pages/cartPage';
import LoginPage from '../features/auth/ui/pages/LoginPage';
// import { hydrate } from '../features/auth/api/authApi';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/auth/state/authSlice';
import { hydrateUserAction } from '../features/auth/state/authAction';

const AppRoutes = () => {
const dispatch = useDispatch();
   useEffect(() => {
    dispatch(hydrateUserAction())
   }, [])

    const router = createBrowserRouter([
        {
           path: "/",
           element: <AuthProtected/>,
           children: [
            {
                path: "", 
                element: <AuthLayout/>,
                children: [
                    {
                        path: "", 
                        element: <LoginPage/>

                    },
                    {
                        path: "register",
                        element: <RegisterPage/>
                    }
                ]
            }
           ] 
        }, 
        {
            path: "/main", 
            element: <MainProtected/>,
            children: [
                {
                    path: "", 
                    element: <MainLayout/>, 
                    children: [
                        {
                            path: "", 
                            element: <HomePage/>
                        }, 
                        {
                            path: "product", 
                            element: <ProductPage/>
                        }, 
                        {
                            path: "cart", 
                            element: <CartPage/>
                        },
                        {
                            path: "order", 
                            element: <OrderPage/>
                        }, 
                        
                    ]
                }
            ]
        }
    ])
  return <RouterProvider router={router}/>
}

export default AppRoutes;
