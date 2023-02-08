import React, { Component,useState } from 'react'
import Home from './home'
import Login from './Login'
import Register from './register'
import {BrowserRouter,Route,Link} from 'react-router-dom'



const App = () => {
  return (
    // <BrowserRouter>
    <div>
      <Home />
    </div>
    // </BrowserRouter>
  )
}

export default App