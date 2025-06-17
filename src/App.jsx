import Home from './pages/home.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import DynamicRoute from './pages/DynamicRoute.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import React from 'react'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/about/:id' element={<DynamicRoute />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App