import React, { useState } from 'react'
import { closenav,hamburger } from '../assets'
import { Link } from 'react-router-dom';
import { navLinks } from '../constants'

const LoggedIn = () => {

  const [profile,setProfile] = useState(false)

  return(
    <>
      <div className="circle rounded-full w-[100px] h-[100px] bg-red-60"></div>
    </>
  )
}

const LoggedOff = () => {
  return(
    <div className='hidden md:block'>
      <Link to="/register"><button className='w-[78px] h-[39px] font-normal text-[18px] leading-[27px] font-poppins'>Sign Up</button></Link>
      <Link to="/login"><button className='w-[78px] h-[39px] bg-[#FF3333] text-white rounded-md text-[18px] font-normal font-poppins leading-[27px] mx-5'>Sign In</button></Link>
    </div>
  )
}

const navbar = () => {
  const [toggle,setToggle] = useState(false)
  const login = false
  return (
    <nav className='w-full bg-white flex py-6 justify-between items-center navbar'>
          <Link to='/'><p className='text-4xl font-sans font-extrabold text-red-600 antialiased'>INFO LOKER</p></Link>

          <ul className='list-none md:flex hidden justify-center items-center flex-1'>
            {navLinks.map((nav,index) => (
              <li key={index} className={`font-poppins font-normal cursore-pointer ${ index === navLinks.length - 1?'mr-0' : 'mr-10' } text-[16px] mr-10`}>
                <Link to={nav.id}>{nav.title}</Link>
              </li>
            ))}
          
          </ul>


        

      <div className="md:hidden flex flex-1 justify-end items-center">
        <img className='w-[40px] h-[40px] object-contain' src={toggle? closenav : hamburger} alt="menu"
        onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'} z-10 w-[50%] h-[100%] p-6 bg-[#FF3333]
        fixed top-20 right-0 mx-4 my-2 Class drop-shadow-2xl
        min-w-[128px] rounded-xl sidebar`}>

          <ul className='list-none flex flex-col justify-star items-center flex-1'>
          {navLinks.map((nav,index) => (
            <li key={index} className={`font-poppins font-normal cursore-pointer ${ index === navLinks.length - 1?'mr-0' : 'mb-4' } text-[18px] text-white`}>
              <Link to={nav.id}>{nav.title}</Link>
            </li>
          ))}
          </ul>
  
        </div>

      </div>

      <div>
        <p>{login? <LoggedIn /> : <LoggedOff />}</p>
      </div>

    </nav>
  )
}

export default navbar