import React from 'react'
import { Navbar } from '../components';
import styles from '../style';
import { compExImg as img } from '../assets';
import { starMap } from '../constants';

const search = () => {
  
    const Comp = () =>{
      return <img src={img} alt="search" />
    }
  return (
    <>
      <div className='w-screen h-full bg-[#FFEBEB]'>

        {/* Navbar Section */}

        <div className="w-full bg-white overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>  
              <Navbar />
          </div>
        </div>

        {/* Search Section */}

        <div className="text-center mt-12">
          <div className="search flex flex-1 justify-center mb-[60px]">
            <form className='flex'> 
              <input type="search" className='w-auto md:w-[805px] h-[65px] px-[23px] py-[19px] rounded-l-md  shadow-lg font-poppins font-normal text-[18px] leading-[27px]' placeholder='Search...' name='search' />
              <div className="btn-wrapper w-[65px] h-[65px] bg-[#fcfcfc] flex justify-center items-center rounded-r-md shadow-lg">
              <button className='border w-[48px] h-[48px] rounded-md bg-[#FF3333] text-white' name='src-button'><i class="fa-solid fa-magnifying-glass"></i></button>
              </div>
            </form>
          </div>

            {/* Card Section */}

          <div className="cards">
            <div className="rec-title mb-[68px]">
              <h1 className='font-poppins font-bold text-[30px] md: text-[40px] leading-[60px] text-[#FF3333]'>RECOMMENDATION</h1>
            </div>

            

            <div className="rec-body mx-[80px] grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-[40px] sm:gap-[100px] md:gap-[60px] justify-items-center">

                {/* All Company Cards & looping*/}

              <div className="card border w-[232px] h-[300px] rounded-lg ">
                <div className="card-head w-[232px] h-[160px]">
                  <Comp />
                </div>
                <div className="card-body w-[232px] h-[140px] bg-white">
                  <div className="profile-box flex flex-col items-start px-3 gap-[4px]">
                    <h1 className='font-poppins font-semibold text-[18px] leading-[27px]'>Software Engineer</h1>
                    <p className='font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'>PT.Telkom</p>
                    <p className='font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'><i class="fa-solid fa-location-dot"></i> Medan,Indonesia</p>
                    <p className='flex font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'>
                    Rating : {starMap.map(res => (
                      <>
                      <img src={res.img} alt="star" />
                      </>
                    ))}
                    </p>  
                  </div>
                  <div className="card-footer flex justify-start items-center mt-5 mx-3">
                    <button className="border bg-[#FF3333] px-[10px] rounded-[10px] text-white font-poppins font-normal text-[12px] leading-[18px]">Details</button>
                  </div>
                </div>
              </div>

              <div className="card border w-[232px] h-[300px] rounded-lg">
                <div className="card-head w-[232px] h-[160px]">
                  <Comp />
                </div>
                <div className="card-body w-[232px] h-[140px] bg-white">
                  <div className="profile-box flex flex-col items-start px-3 gap-[4px]">
                    <h1 className='font-poppins font-semibold text-[18px] leading-[27px]'>Software Engineer</h1>
                    <p className='font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'>PT.Telkom</p>
                    <p className='font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'><i class="fa-solid fa-location-dot"></i> Medan,Indonesia</p>
                    <p className='flex font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'>
                    Rating : {starMap.map(res => (
                      <>
                      <img src={res.img} alt="star" />
                      </>
                    ))}
                    </p>  
                  </div>
                  <div className="card-footer flex justify-start items-center mt-5 mx-3">
                    <button className="border bg-[#FF3333] px-[10px] rounded-[10px] text-white font-poppins font-normal text-[12px] leading-[18px]">Details</button>
                  </div>
                </div>
              </div>

              <div className="card border w-[232px] h-[300px] rounded-lg">
                <div className="card-head w-[232px] h-[160px]">
                  <Comp />
                </div>
                <div className="card-body w-[232px] h-[140px] bg-white">
                  <div className="profile-box flex flex-col items-start px-3 gap-[4px]">
                    <h1 className='font-poppins font-semibold text-[18px] leading-[27px]'>Software Engineer</h1>
                    <p className='font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'>PT.Telkom</p>
                    <p className='font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'><i class="fa-solid fa-location-dot"></i> Medan,Indonesia</p>
                    <p className='flex font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'>
                    Rating : {starMap.map(res => (
                      <>
                      <img src={res.img} alt="star" />
                      </>
                    ))}
                    </p>  
                  </div>
                  <div className="card-footer flex justify-start items-center mt-5 mx-3">
                    <button className="border bg-[#FF3333] px-[10px] rounded-[10px] text-white font-poppins font-normal text-[12px] leading-[18px]">Details</button>
                  </div>
                </div>
              </div>

              <div className="card border w-[232px] h-[300px] rounded-lg">
                <div className="card-head w-[232px] h-[160px]">
                  <Comp />
                </div>
                <div className="card-body w-[232px] h-[140px] bg-white">
                  <div className="profile-box flex flex-col items-start px-3 gap-[4px]">
                    <h1 className='font-poppins font-semibold text-[18px] leading-[27px]'>Software Engineer</h1>
                    <p className='font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'>PT.Telkom</p>
                    <p className='font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'><i class="fa-solid fa-location-dot"></i> Medan,Indonesia</p>
                    <p className='flex font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'>
                    Rating : {starMap.map(res => (
                      <>
                      <img src={res.img} alt="star" />
                      </>
                    ))}
                    </p>  
                  </div>
                  <div className="card-footer flex justify-start items-center mt-5 mx-3">
                    <button className="border bg-[#FF3333] px-[10px] rounded-[10px] text-white font-poppins font-normal text-[12px] leading-[18px]">Details</button>
                  </div>
                </div>
              </div>

              <div className="card border w-[232px] h-[300px] rounded-lg">
                <div className="card-head w-[232px] h-[160px]">
                  <Comp />
                </div>
                <div className="card-body w-[232px] h-[140px] bg-white">
                  <div className="profile-box flex flex-col items-start px-3 gap-[4px]">
                    <h1 className='font-poppins font-semibold text-[18px] leading-[27px]'>Software Engineer</h1>
                    <p className='font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'>PT.Telkom</p>
                    <p className='font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'><i class="fa-solid fa-location-dot"></i> Medan,Indonesia</p>
                    <p className='flex font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'>
                    Rating : {starMap.map(res => (
                      <>
                      <img src={res.img} alt="star" />
                      </>
                    ))}
                    </p>  
                  </div>
                  <div className="card-footer flex justify-start items-center mt-5 mx-3">
                    <button className="border bg-[#FF3333] px-[10px] rounded-[10px] text-white font-poppins font-normal text-[12px] leading-[18px]">Details</button>
                  </div>
                </div>
              </div>

              <div className="card border w-[232px] h-[300px] rounded-lg">
                <div className="card-head w-[232px] h-[160px]">
                  <Comp />
                </div>
                <div className="card-body w-[232px] h-[140px] bg-white">
                  <div className="profile-box flex flex-col items-start px-3 gap-[4px]">
                    <h1 className='font-poppins font-semibold text-[18px] leading-[27px]'>Software Engineer</h1>
                    <p className='font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'>PT.Telkom</p>
                    <p className='font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'><i class="fa-solid fa-location-dot"></i> Medan,Indonesia</p>
                    <p className='flex font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'>
                    Rating : {starMap.map(res => (
                      <>
                      <img src={res.img} alt="star" />
                      </>
                    ))}
                    </p>  
                  </div>
                  <div className="card-footer flex justify-start items-center mt-5 mx-3">
                    <button className="border bg-[#FF3333] px-[10px] rounded-[10px] text-white font-poppins font-normal text-[12px] leading-[18px]">Details</button>
                  </div>
                </div>
              </div>

              <div className="card border w-[232px] h-[300px] rounded-lg">
                <div className="card-head w-[232px] h-[160px]">
                  <Comp />
                </div>
                <div className="card-body w-[232px] h-[140px] bg-white">
                  <div className="profile-box flex flex-col items-start px-3 gap-[4px]">
                    <h1 className='font-poppins font-semibold text-[18px] leading-[27px]'>Software Engineer</h1>
                    <p className='font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'>PT.Telkom</p>
                    <p className='font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'><i class="fa-solid fa-location-dot"></i> Medan,Indonesia</p>
                    <p className='flex font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'>
                    Rating : {starMap.map(res => (
                      <>
                      <img src={res.img} alt="star" />
                      </>
                    ))}
                    </p>  
                  </div>
                  <div className="card-footer flex justify-start items-center mt-5 mx-3">
                    <button className="border bg-[#FF3333] px-[10px] rounded-[10px] text-white font-poppins font-normal text-[12px] leading-[18px]">Details</button>
                  </div>
                </div>
              </div>

              <div className="card border w-[232px] h-[300px] rounded-lg">
                <div className="card-head w-[232px] h-[160px]">
                  <Comp />
                </div>
                <div className="card-body w-[232px] h-[140px] bg-white">
                  <div className="profile-box flex flex-col items-start px-3 gap-[4px]">
                    <h1 className='font-poppins font-semibold text-[18px] leading-[27px]'>Software Engineer</h1>
                    <p className='font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'>PT.Telkom</p>
                    <p className='font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'><i class="fa-solid fa-location-dot"></i> Medan,Indonesia</p>
                    <p className='flex font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'>
                    Rating : {starMap.map(res => (
                      <>
                      <img src={res.img} alt="star" />
                      </>
                    ))}
                    </p>  
                  </div>
                  <div className="card-footer flex justify-start items-center mt-5 mx-3">
                    <button className="border bg-[#FF3333] px-[10px] rounded-[10px] text-white font-poppins font-normal text-[12px] leading-[18px]">Details</button>
                  </div>
                </div>
              </div>

              <div className="card border w-[232px] h-[300px] rounded-lg">
                <div className="card-head w-[232px] h-[160px]">
                  <Comp />
                </div>
                <div className="card-body w-[232px] h-[140px] bg-white">
                  <div className="profile-box flex flex-col items-start px-3 gap-[4px]">
                    <h1 className='font-poppins font-semibold text-[18px] leading-[27px]'>Software Engineer</h1>
                    <p className='font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'>PT.Telkom</p>
                    <p className='font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'><i class="fa-solid fa-location-dot"></i> Medan,Indonesia</p>
                    <p className='flex font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'>
                    Rating : {starMap.map(res => (
                      <>
                      <img src={res.img} alt="star" />
                      </>
                    ))}
                    </p>  
                  </div>
                  <div className="card-footer flex justify-start items-center mt-5 mx-3">
                    <button className="border bg-[#FF3333] px-[10px] rounded-[10px] text-white font-poppins font-normal text-[12px] leading-[18px]">Details</button>
                  </div>
                </div>
              </div>

              <div className="card border w-[232px] h-[300px] rounded-lg">
                <div className="card-head w-[232px] h-[160px]">
                  <Comp />
                </div>
                <div className="card-body w-[232px] h-[140px] bg-white">
                  <div className="profile-box flex flex-col items-start px-3 gap-[4px]">
                    <h1 className='font-poppins font-semibold text-[18px] leading-[27px]'>Software Engineer</h1>
                    <p className='font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'>PT.Telkom</p>
                    <p className='font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'><i class="fa-solid fa-location-dot"></i> Medan,Indonesia</p>
                    <p className='flex font-poppins font-normal text-[12px] leading-[18px] text-[#5b5b5b]'>
                    Rating : {starMap.map(res => (
                      <>
                      <img src={res.img} alt="star" />
                      </>
                    ))}
                    </p>  
                  </div>
                  <div className="card-footer flex justify-start items-center mt-5 mx-3">
                    <button className="border bg-[#FF3333] px-[10px] rounded-[10px] text-white font-poppins font-normal text-[12px] leading-[18px]">Details</button>
                  </div>
                </div>
              </div>
              
              
              
              {/* End For Company Cards */}

            </div>
          </div>
        </div>

      </div>
    </>

  )
}

export default search