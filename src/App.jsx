import React from 'react'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'



function App() {
  return (
    <div>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/services' element={<Services/>}/>
     <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </div>
  )
}

export default App