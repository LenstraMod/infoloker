import React from 'react'
import { Navbar, Footer } from '../components';
import { Avatar,Location } from '../assets';
import styles from "../style"; 

const profile = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      
      <div className={`${styles.flexStart} bg-white`}>
        <div className="profile grid grid-cols-1 lg:grid-cols-3 mt-10">
          <div className="image flex justify-center">
            <img src={Avatar} alt="" />
          </div>
         
          <div className="information col-span-2 mx-10 mt-9 grid justify-items-center md:justify-items-start">
            <div className="header">
              <div className="flex items-center">
              <h1 className='font-poppins font-bold text-[30px] leading-[45px] uppercase'>Abraham Shalom Nadeak</h1>
              <div className="addr font-poppins font-normal text-[18px] leading-[27px] mx-5"><i class="fa-solid fa-location-dot"></i> Medan </div>
              </div>
              <p className='font-poppins font-bold text-[#FF3333] text-[18px] leading-[27px] uppercase'>Software Engineer</p>
            </div>

            <div className="prof-main grid grid-cols-1 lg:2 ">
              <div className="body mt-5">
                <h3 className='mb-5 font-poppins font-normal text-[18px] leading-[27px] text-[#BCBBBB] uppercase'>Contact Information</h3>
                <table className="text-left w-[40em] h-[8em]">
                  <tr>
                    <th>Phone</th>
                    <td className='text-[#FF3333] font-poppins font-bold text-[18px] leading-[27px]'>+62 *** **** ****</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td className='text-[#FF3333] font-poppins font-bold text-[18px] leading-[27px]'>Jl.Bintang Melati no 33 Jakarata,Indonesia</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td className='text-[#FF3333] font-poppins font-bold text-[18px] leading-[27px]'>Email@mail.com</td>
                  </tr>
                  <tr>
                    <th>Site</th>
                    <td className='text-[#FF3333] font-poppins font-bold text-[18px] leading-[27px]'>www.site.com</td>
                  </tr>
                </table>
              </div>
              <div className="body mt-5">
                <h3 className='mb-5 font-poppins font-normal text-[18px] leading-[27px] text-[#BCBBBB] uppercase'>Basic Information</h3>
                <table className="text-left w-[20em] h-[4em]">
                  <tr>
                    <th>Birthday</th>
                    <td className='text-[#FF3333] font-poppins font-bold text-[18px] leading-[27px]'>1 January 1998</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td className='text-[#FF3333] font-poppins font-bold text-[18px] leading-[27px]'>Laki-Laki</td>
                  </tr>
                </table>
              </div>
              
            </div>

          </div>
          <div className="job mx-10 mt-5 mb-5 grid ">
           <div className="font-poppins font-normal text-[18px] leading-[27px]">
            Experience<hr />
           </div>

           {/* primary Job */}
            <div className="primary mt-5">
              <div className="job-title mb-5">
                <h2 className='font-poppins font-normal text-[26px] leading-[39px]'>Software Engineer <span className='w-[94px] h-[39px] bg-[#FF3333] rounded-md text-white font-normal text-[18px] leading-[27px] px-6 py-1'>Primary</span></h2>
              </div>
              <div className="job-body break-words font-poppins font-normal text-[18px] leading-[27px] text-[#BCBBBB]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima necessitatibus recusandae id enim molestiae hic tempora beatae illum, accusantium dicta expedita voluptas
                 esse nulla aperiam aliquid, saepe neque doloremque?
              </div>
            </div>

            {/* Secondary Job */}
            <div className="secondary mt-5">
              <div className="job-title mb-5">
                <h2 className='font-poppins font-normal text-[26px] leading-[39px]'>Web Desainer <span className='w-[94px] h-[39px] bg-[#FF3333] rounded-md text-white font-normal text-[18px] leading-[27px] px-6 py-1'>Secondary</span></h2>
              </div>
              <div className="job-body break-words font-poppins font-normal text-[18px] leading-[27px] text-[#BCBBBB]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima necessitatibus recusandae id enim molestiae hic tempora beatae illum, accusantium dicta expedita voluptas
                 esse nulla aperiam aliquid, saepe neque doloremque?
              </div>
            </div>
          </div>
          <div className="bio col-span-2 mt-[20px] mx-10 mb-9">
            <h2 className='font-poppins font-normal text-[18px] leading-[27px] text-[#BCBBBB]'>Bio</h2>
            <hr />
            <div className="desc break-words font-poppins font-normal text-[18px] leading-[27px] mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Repudiandae enim totam explicabo ratione doloremque 
               accusamus adipisci vero excepturi iusto dolorum unde 
               molestias, aut libero hic laudantium? Voluptatem 
               consequuntur molestiae minima!
               <br />
               <br />
               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Repudiandae enim totam explicabo ratione doloremque 
               accusamus adipisci vero excepturi iusto dolorum unde 
               molestias, aut libero hic laudantium? Voluptatem 
               consequuntur molestiae minima!
            </div>
          </div>
           <div className="edit-section flex flex-1 justify-end mx-[150px] sm:mx-[90px] mb-10 col-span-none md:col-span-3">
          <button className='w-[155px] h-[42px] bg-[#FF3333] rounded-md text-white font-poppins font-bold text-[20px] leading-[30px]'>Edit</button>
        </div>
        </div>   
      </div>
      <Footer />
    </div>
  )
}

export default profile


