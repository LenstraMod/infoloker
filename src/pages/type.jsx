import React from 'react'
import {partTime,freshGraduate,fullTime} from '../assets'; 
import styles from "../style";
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom';

const Type = () => {
  return (
    <div>
      <div className="w-full bg-white overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <Navbar />
      </div>
      
      <div className={`${styles.flexCenter} bg-white mb-9`}>
          <div className='w-ful h-fit grid grid-cols-1 md:grid-cols-3 justify-items-center content-center gap-6 mb-9'>
            <div className='bg-[#FF3333] flex flex-col justfify-center z-10 w-auto'>
              <img src={partTime} alt="partTime" className='px-[45px] py-[25px]' />
              <Link to="/search"><button className='w-[269px] h-[68px] bg-[#FFFFFF] text-[#FF3333] font-bold text-[32px] leading-[48px] p-[10px] rounded-md mt-[35px] mb-9 lg:mt-[235px] mx-[105px] font-poppins uppercase'>Part Time</button></Link>
            </div>
            <div className='bg-[#FFFFFF] flex flex-col justfify-center w-auto'>
              <img src={fullTime} alt="partTime" className='px-[45px] py-[25px] ' />
              <Link to="/search"><button className='w-[269px] h-[68px] bg-[#FF3333] text-[#FFFFFF] font-bold text-[32px] leading-[48px] p-[10px] rounded-md mb-9 mx-[205px] mt-[-40px] lg:mt-10 font-poppins uppercase'>Part Time</button></Link>
            </div>
            <div className='bg-[#FF3333] flex flex-col justfify-center w-auto'>
              <img src={freshGraduate} alt="partTime" className='px-[45px] py-[25px]' />
              <Link to="/search"><button className='w-[269px] h-[68px] bg-[#FFFFFF] text-[#FF3333] font-bold text-[32px] leading-[48px] p-[10px] rounded-md mt-[35px] mb-9 lg:mt-[235px] mx-[105px] font-poppins uppercase'>Part Time</button></Link>
            </div>     
          </div>
      </div>
    </div>
    </div>
  )
}

export default Type;