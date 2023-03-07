import React from 'react'
import { Navbar } from '../components'
import styles from "../style";
import {Map, aboutContent, aboutPhoto} from '../assets'

const About = () => {
  return (
    <div className="w-full bg-white overflow-hidden">

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      
      <div className={`${styles.flexCenter} bg-[#FF3333] shadow-lg`}>
          <div className="header w-screen h-[298px] flex justify-center pt-[35px]">
            <p className='font-poppins font-bold text-[45px] leading-[68px] text-white'>ABOUT US</p>
          </div>  
          <div className="founder absolute mt-[400px]">
            <img src={aboutPhoto} alt="founder" />
          </div>
      </div>
      <div className={`${styles.flexCenter} pt-[308px]`}> 
      <img src={Map} className="w-full absolute h-auto" alt="map" />
      <p className='text-[12px] sm:text-[24px] leading-[36px] font-normal font-poppins break-all text-center'>Info Loker is a Website Project made by us three student of <br/>
        SMK Multi Karya  Medan for our Field Work Training<br/>
        since January 2023 until April 2023.</p>
      </div>

      <div className='flex flex-1 justify-center mt-[100px] gap-[100px]'>
      <div className="content-img hidden sm:block">
      <img src={aboutContent} alt="content" />
      </div>
      <div className="content">
        <p className='font-poppins normal font-bold text-[45px] leading-[68px] text-[#FF3333]'>OUR GOAL</p>
        <p className='font-poppins font-normal text-[12px] sm:text-[24px] leading-[36px] text-[#171717]'>Info Loker was Created to help many people<br/>
        getting their dream job easily with our help. <br/>
        Freelance? Part-Time Job? Full-Time Job?<br/>
        All in Info Loker.
        </p>
      </div>
      </div>

    </div>
  )
}

export default About