import React, { Component,useState } from 'react'
import Home from './pages/home'
import Login from './pages/Login'
import Register from './pages/register'
import About from './pages/about'
import Type  from './pages/type'
import notFound from './pages/notFound'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'




const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home /> } />
        <Route path='/about' element={<About /> } />
        <Route path='*' element={<notFound /> } />
        <Route path='/login' element={<Login/> } />
      </Routes>
    </Router>
  )
}

export default App