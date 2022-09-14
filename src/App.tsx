import React from 'react'

// react router dom@6.3.0
import { Routes, Route } from 'react-router-dom'

// Components
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Photos from './Components/Photos'
import Profile from './Components/Profile'
import Search from './Components/Search'

function App () {
  return (
    <div className='bg-white w-screen h-screen'>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/Search' element={<Search />}/>
        <Route path='/Photos' element={<Photos />}/>
        <Route path='/Profile' element={<Profile />}/>
      </Routes>
    </div>
  )
}

export default App
