import React from 'react'
import { Routes, Route } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Details from '../pages/Details'
import NestedContact from '../pages/NestedContact'


const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}>
            <Route path='details' element={<Details/>}/>
        </Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}>
            <Route path='nested' element={<NestedContact/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default AppRouter
