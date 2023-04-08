import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './screens/AboutUs'
import HomeScreen from './screens/HomeScreen'
import NotFound from './screens/NotFound'
import ContactUs from './screens/ContactUs'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>

  )
}

export default App