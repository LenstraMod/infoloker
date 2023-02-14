import React from 'react'
import {partTime,freshGraduate,fullTime} from '../assets'; 
import styles from "../style";
import Navbar from '../components/navbar'

const type = () => {
  return (
    <div>
      <div className="w-full bg-white overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.boxWidth}`}>
          <div className='w-ful h-fit grid grid-cols-1 sm:grid-cols-3 justify-items-center content-center gap-6'>
            <div className='bg-[#FF3333] flex flex-col justfify-center z-10'>
              <img src={partTime} alt="partTime" className='px-[45px] py-[25px]' />
              <button className='w-[269px] h-[68px] bg-[#FFFFFF] text-[#FF3333] font-bold text-[32px] leading-[48px] p-[10px] rounded-md mb-9 mx-[105px] font-poppins uppercase'>Part Time</button>
            </div>
            <div className='bg-[#FFFFFF] flex flex-col justfify-center'>
              <img src={fullTime} alt="partTime" className='px-[45px] py-[25px] ' />
              <button className='w-[269px] h-[68px] bg-[#FF3333] text-[#FFFFFF] font-bold text-[32px] leading-[48px] p-[10px] rounded-md mb-9 mx-[105px] mt-[-40px] lg:mt-10 font-poppins uppercase'>Part Time</button>
            </div>
            <div className='bg-[#FF3333] flex flex-col justfify-center'>
              <img src={freshGraduate} alt="partTime" className='px-[45px] py-[25px]' />
              <button className='w-[269px] h-[68px] bg-[#FFFFFF] text-[#FF3333] font-bold text-[32px] leading-[48px] p-[10px] rounded-md mb-9 mx-[105px] font-poppins uppercase'>Part Time</button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default type