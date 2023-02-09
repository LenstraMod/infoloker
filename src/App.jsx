import React, { Component,useState } from 'react'
import Home from './home'
import Login from './Login'
import Register from './register'
import About from './about'
import {BrowserRouter,Route,Link} from 'react-router-dom'



const App = () => {
  return (
    // <BrowserRouter>
    <div>
      <About />
    </div>
    // </BrowserRouter>
  )
}

export default App