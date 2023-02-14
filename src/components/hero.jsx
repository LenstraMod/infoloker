import React from 'react'
import styles from '../style'
import { search,robot,mainContent } from '../assets'

const hero = () => {
  return(
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
            <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>#</span> 
             CariKerjaMudahLoh
            </p>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black
                ss:leading-[100px] leading-[75px]'>
                    FIND YOUR DREAM JOB <br className='sm:block hidden' />
                    {''}
                    <span className='text-gradient'>FAST AND EASY</span>
                </h1>
            </div>

            <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>Find a job that suits you in Info Loker</p>
            <div>
                <form>
                    <label class="relative block flex">
                        <span class="sr-only">Search</span>
                        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-[350px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                        <button className='mx-3 border px-2 rounded-md bg-red-600'><i className="fa-solid fa-magnifying-glass text-white"></i></button>
                    </label>
                </form>
            </div>       
    </div>
    <div>
        <img src={mainContent} alt="robot" className='w-[100%] max-w-[600px] h-100[100%] relative z-[5]' />
    </div>
  </section>
  )
}

export default hero;