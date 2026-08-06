import React from 'react'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import ProductsApi from './api/ProductsApi'

const App = () => {
  return (
    <div className='flex flex-col gap-6'>
      <Navbar/>
      <AppRoutes/>
    </div>
  )
}

export default App
