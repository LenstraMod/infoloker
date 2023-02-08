import React, { useState } from 'react'
import { closenav,hamburger } from '../assets'
import { navLinks } from '../constants'

const navbar = () => {
  const [toggle,setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <p className='text-4xl font-sans font-extrabold text-red-600 antialiased'>INFO LOKER</p>

      <ul className='list-none sm:flex hidden justify-center items-center flex-1'>
        {navLinks.map((nav,index) => (
          <li key={index} className={`font-poppins font-normal cursore-pointer ${ index === navLinks.length - 1?'mr-0' : 'mr-10' } text-[16px] mr-10`}>
            <a href={`${nav.id}`}>
            {nav.title}
            </a>
          </li>
        ))}
        <button className='px-2 font-poppins'>Register</button>
        <button className='bg-red-600 px-2 text-white font-poppins rounded-[8px]'>Login</button>
      </ul>

        

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img className='w-[40px] h-[40px] object-contain' src={toggle? closenav : hamburger} alt="menu"
        onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'} z-10 w-[50%] h-[80%] p-6 bg-red-500
        fixed top-20 right-0 mx-4 my-2 Class drop-shadow-2xl
        min-w-[128px] rounded-xl sidebar`}>

        <ul className='list-none flex flex-col justify-star items-center flex-1'>
        {navLinks.map((nav,index) => (
          <li key={index} className={`font-poppins font-normal cursore-pointer ${ index === navLinks.length - 1?'mr-0' : 'mb-4' } text-[16px] text-white`}>
            <a href={`${nav.id}`}>
            {nav.title}
            </a>
          </li>
        ))}
             <button className='px-2 font-poppins mt-[50px] text-white'>Register</button>
        <button className='bg-slate-100 px-2 text-black font-poppins rounded-[8px] mt-2'>Login</button>
      </ul>
  
        </div>

      </div>

    </nav>
  )
}

export default navbar