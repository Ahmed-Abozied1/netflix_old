import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './screens/AboutUs'
import HomeScreen from './screens/HomeScreen'
import NotFound from './screens/NotFound'
import ContactUs from './screens/ContactUs'
import MoviesPage from './screens/Movies'
import SingleMovie from './screens/SingleMovie'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/movies' element={<MoviesPage/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/movie/:id' element={<SingleMovie/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>

  )
}

export default App