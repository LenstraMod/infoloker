import React,{ useState } from 'react'
import { Navbar, Footer } from '../components';
import { compProf, compBg, Mark,markClicked } from '../assets';

const bookmark = () => {

  const [toggle,setToggle] = useState(true);

  const handleMark = () => {
    setToggle((prev) => !prev,false)
    alert("Job removed from Bookmark")

  }

  const Prof = () => {
    return <img src={compProf} className="w-[104px] h-[80px]" alt="Company Profile" />
  }

  const Bg = () => {
    return <img src={compBg} className="h-[250px] w-screen"  alt="Company Background" />
  }

  return (
    <div className='w-full h-full bg-white overflow-hidden'>
        <div className="navbar">
            <Navbar />
        </div>

        <div className="bookmark-body flex flex-1 justify-center ">
            <div className="wrapper w-[564px]">
              <div className="header w-[566px] md:w-[584px] h-[50px] px-[60px] sm:px-[30px] bg-[#FF3333] flex flex-1 items-center justify-around text-white font-poppins font-bold text-[20px] leading-[30px]">
                  <p className='text-[16px] sm:text-[20px]'>Bookmarked Jobs</p>
                  <button className='text-[16px] sm:text-[20px]'><i class="fa-solid fa-xmark"></i> Remove All</button>
                </div>
            <div className="comp-list border h-screen w-fit overflow-scroll">
                
                <div className="list ">
                  <ul >
                    <li className='h-[100px] w-[564px] border flex justify-evenly sm:justify-around hover:bg-[#EAEAEA] duration-300 ease-out'>
                      <div className="prof">
                        <Prof />
                      </div>
                      <div className="name">
                        <p className='font-poppins font-semibold text-[20px] md:text-[24px] leading-[36px]'>Jenis Pekerjaan</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>PT. Contoh Perusahaan Indonesia</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>Jakarta, Indonesia</p>
                      </div>
                    </li>
                    <li className='h-[100px] w-[564px] border flex justify-evenly sm:justify-around hover:bg-[#EAEAEA] duration-300 ease-out'>
                      <div className="prof">
                        <Prof />
                      </div>
                      <div className="name">
                        <p className='font-poppins font-semibold text-[20px] md:text-[24px] leading-[36px]'>Jenis Pekerjaan</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>PT. Contoh Perusahaan Indonesia</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>Jakarta, Indonesia</p>
                      </div>
                    </li>
                    <li className='h-[100px] w-[564px] border flex justify-evenly sm:justify-around hover:bg-[#EAEAEA] duration-300 ease-out'>
                      <div className="prof">
                        <Prof />
                      </div>
                      <div className="name">
                        <p className='font-poppins font-semibold text-[20px] md:text-[24px] leading-[36px]'>Jenis Pekerjaan</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>PT. Contoh Perusahaan Indonesia</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>Jakarta, Indonesia</p>
                      </div>
                    </li>
                    <li className='h-[100px] w-[564px] border flex justify-evenly sm:justify-around hover:bg-[#EAEAEA] duration-300 ease-out'>
                      <div className="prof">
                        <Prof />
                      </div>
                      <div className="name">
                        <p className='font-poppins font-semibold text-[20px] md:text-[24px] leading-[36px]'>Jenis Pekerjaan</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>PT. Contoh Perusahaan Indonesia</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>Jakarta, Indonesia</p>
                      </div>
                    </li>
                    <li className='h-[100px] w-[564px] border flex justify-evenly sm:justify-around hover:bg-[#EAEAEA] duration-300 ease-out'>
                      <div className="prof">
                        <Prof />
                      </div>
                      <div className="name">
                        <p className='font-poppins font-semibold text-[20px] md:text-[24px] leading-[36px]'>Jenis Pekerjaan</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>PT. Contoh Perusahaan Indonesia</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>Jakarta, Indonesia</p>
                      </div>
                    </li>
                    <li className='h-[100px] w-[564px] border flex justify-evenly sm:justify-around hover:bg-[#EAEAEA] duration-300 ease-out'>
                      <div className="prof">
                        <Prof />
                      </div>
                      <div className="name">
                        <p className='font-poppins font-semibold text-[20px] md:text-[24px] leading-[36px]'>Jenis Pekerjaan</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>PT. Contoh Perusahaan Indonesia</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>Jakarta, Indonesia</p>
                      </div>
                    </li>
                    <li className='h-[100px] w-[564px] border flex justify-evenly sm:justify-around hover:bg-[#EAEAEA] duration-300 ease-out'>
                      <div className="prof">
                        <Prof />
                      </div>
                      <div className="name">
                        <p className='font-poppins font-semibold text-[20px] md:text-[24px] leading-[36px]'>Jenis Pekerjaan</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>PT. Contoh Perusahaan Indonesia</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>Jakarta, Indonesia</p>
                      </div>
                    </li>
                    <li className='h-[100px] w-[564px] border flex justify-evenly sm:justify-around hover:bg-[#EAEAEA] duration-300 ease-out'>
                      <div className="prof">
                        <Prof />
                      </div>
                      <div className="name">
                        <p className='font-poppins font-semibold text-[20px] md:text-[24px] leading-[36px]'>Jenis Pekerjaan</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>PT. Contoh Perusahaan Indonesia</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>Jakarta, Indonesia</p>
                      </div>
                    </li>
                    <li className='h-[100px] w-[564px] border flex justify-evenly sm:justify-around hover:bg-[#EAEAEA] duration-300 ease-out'>
                      <div className="prof">
                        <Prof />
                      </div>
                      <div className="name">
                        <p className='font-poppins font-semibold text-[20px] md:text-[24px] leading-[36px]'>Jenis Pekerjaan</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>PT. Contoh Perusahaan Indonesia</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>Jakarta, Indonesia</p>
                      </div>
                    </li>
                    <li className='h-[100px] w-[564px] border flex justify-evenly sm:justify-around hover:bg-[#EAEAEA] duration-300 ease-out'>
                      <div className="prof">
                        <Prof />
                      </div>
                      <div className="name">
                        <p className='font-poppins font-semibold text-[20px] md:text-[24px] leading-[36px]'>Jenis Pekerjaan</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>PT. Contoh Perusahaan Indonesia</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>Jakarta, Indonesia</p>
                      </div>
                    </li>
                    <li className='h-[100px] w-[564px] border flex justify-evenly sm:justify-around hover:bg-[#EAEAEA] duration-300 ease-out'>
                      <div className="prof">
                        <Prof />
                      </div>
                      <div className="name">
                        <p className='font-poppins font-semibold text-[20px] md:text-[24px] leading-[36px]'>Jenis Pekerjaan</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>PT. Contoh Perusahaan Indonesia</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>Jakarta, Indonesia</p>
                      </div>
                    </li>
                    <li className='h-[100px] w-[564px] border flex justify-evenly sm:justify-around hover:bg-[#EAEAEA] duration-300 ease-out'>
                      <div className="prof">
                        <Prof />
                      </div>
                      <div className="name">
                        <p className='font-poppins font-semibold text-[20px] md:text-[24px] leading-[36px]'>Jenis Pekerjaan</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>PT. Contoh Perusahaan Indonesia</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>Jakarta, Indonesia</p>
                      </div>
                    </li>
                    <li className='h-[100px] w-[564px] border flex justify-evenly sm:justify-around hover:bg-[#EAEAEA] duration-300 ease-out'>
                      <div className="prof">
                        <Prof />
                      </div>
                      <div className="name">
                        <p className='font-poppins font-semibold text-[20px] md:text-[24px] leading-[36px]'>Jenis Pekerjaan</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>PT. Contoh Perusahaan Indonesia</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>Jakarta, Indonesia</p>
                      </div>
                    </li>
                    <li className='h-[100px] w-[564px] border flex justify-evenly sm:justify-around hover:bg-[#EAEAEA] duration-300 ease-out'>
                      <div className="prof">
                        <Prof />
                      </div>
                      <div className="name">
                        <p className='font-poppins font-semibold text-[20px] md:text-[24px] leading-[36px]'>Jenis Pekerjaan</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>PT. Contoh Perusahaan Indonesia</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>Jakarta, Indonesia</p>
                      </div>
                    </li>
                    <li className='h-[100px] w-[564px] border flex justify-evenly sm:justify-around hover:bg-[#EAEAEA] duration-300 ease-out'>
                      <div className="prof">
                        <Prof />
                      </div>
                      <div className="name">
                        <p className='font-poppins font-semibold text-[20px] md:text-[24px] leading-[36px]'>Jenis Pekerjaan</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>PT. Contoh Perusahaan Indonesia</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>Jakarta, Indonesia</p>
                      </div>
                    </li>
                    <li className='h-[100px] w-[564px] border flex justify-evenly sm:justify-around hover:bg-[#EAEAEA] duration-300 ease-out'>
                      <div className="prof">
                        <Prof />
                      </div>
                      <div className="name">
                        <p className='font-poppins font-semibold text-[20px] md:text-[24px] leading-[36px]'>Jenis Pekerjaan</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>PT. Contoh Perusahaan Indonesia</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>Jakarta, Indonesia</p>
                      </div>
                    </li>
                    <li className='h-[100px] w-[564px] border flex justify-evenly sm:justify-around hover:bg-[#EAEAEA] duration-300 ease-out'>
                      <div className="prof">
                        <Prof />
                      </div>
                      <div className="name">
                        <p className='font-poppins font-semibold text-[20px] md:text-[24px] leading-[36px]'>Jenis Pekerjaan</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>PT. Contoh Perusahaan Indonesia</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>Jakarta, Indonesia</p>
                      </div>
                    </li>
                    <li className='h-[100px] w-[564px] border flex justify-evenly sm:justify-around hover:bg-[#EAEAEA] duration-300 ease-out'>
                      <div className="prof">
                        <Prof />
                      </div>
                      <div className="name">
                        <p className='font-poppins font-semibold text-[20px] md:text-[24px] leading-[36px]'>Jenis Pekerjaan</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>PT. Contoh Perusahaan Indonesia</p>
                        <p className='font-poppins font-normal text-[12px] md:text-[18px] leading-[27px]'>Jakarta, Indonesia</p>
                      </div>
                    </li>
                    
                  </ul>
                </div>
              </div>

            </div>
            <div className="comp-detail hidden md:block">
                <div className="header pl-5">
                  <Bg />
                </div>
                <div className="body">
                  <div className="header flex justify-between">
                    <div className="compProf border w-[165px] h-[131px] flex justify-center items-center bg-white shadow-lg mx-[50px] my-[-50px] mb-12">
                      <Prof />
                    </div>
                    <div className="time-bookmarked px-8 py-3">
                      <p className='font-poppins font-normal text-[20px] leading-[30px] text-[#FF3333]'>BookMarked 2 days ago</p>
                    </div>
                  </div>
                  <div className="info mb-[220px] mx-12">
                    <h3 className='font-poppins font-semibold text-[30px] leading-[45px]'>Jenis Pekerjaan</h3>
                    <p className='font-poppins font-normal text-[20px] leading-[30px]'>PT. Contoh Perusahaan</p>
                    <p className='font-poppins font-normal text-[20px] leading-[30px] text-[#515151]'>Jakarta Indonesia</p>
                  </div>
                  <div className="buttons flex flex-1 justify-between px-8 items-center">
                    <div className="inter grid grid-cols-2 gap-[10px]">
                      <button className='border p-3 rounded-md bg-[#FF3333] text-white font-poppins font-bold text-[25px] leading-[38px]'>Apply Now</button>
                      <button className='border p-3 rounded-md bg-[#FF3333] text-white font-poppins font-bold text-[25px] leading-[38px]'>More Details</button>
                    </div>
                    <div className="outer">
                      <button onClick={handleMark}><img src={toggle? markClicked : Mark} alt="mark" /></button>
                    </div>
                  </div>
                </div>
              </div>
        </div>

        <div className="footer">
            <Footer />
        </div>
    </div>
  )
}

export default bookmark