import React from 'react'
import Navbar from './components/Navbar'
import AppRouter from './router/AppRouter'

const App = () => {
  return (
    <div className=' h-screen bg-black text-white'>
      <Navbar/>
      <AppRouter/>
    </div>
  )
}

export default App
