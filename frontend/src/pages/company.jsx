import React from 'react'
import styles from '../style';
import { Navbar } from '../components';
import { compBg, compProf } from '../assets';
import { starMap } from '../constants';

const company = () => {

    const Img = () => {
        return <img src={compBg} className="w-full h-[630px]" alt="Company Background Picture" />
    }

    const Pict = () => {
        return <img src={compProf} alt="Company Profile Picture" />
    }

  return (
    <div className='w-full bg-[#FFEBEB] overflow-x-hidden flex flex-col items-center'>

        <Navbar />

      <div className="comp-prof w-[1200px] bg-white mt-12">
        <div className="wrapper">
            <div className="bg-img">
                <Img />
            </div>
        <div className="prof-header flex flex-1 gap-[40px] py-5 justify-center">
            <div className="logo">
                <div className="box border shadow-lg w-[260px] h-[204px] bg-white p-5 relative my-[-120px] left-[-150px]">
                    <Pict />
                </div>
            </div>
            <div className="name">
                <h1 className='font-poppins font-semibold text-[38px] leading-[37px]'>Software Engineer</h1>
                <p className='font-poppins font-normal text-[18px] leading-[28px] text-[#5b5b5b]'>PT.Telkom</p>
                <p className='font-poppins font-normal text-[18px] leading-[28px] text-[#5b5b5b]'><i class="fa-solid fa-location-dot"></i> Medan,Indonesia</p>
                <p className='flex font-poppins font-normal text-[18px] leading-[18px] text-[#5b5b5b]'>
                Rating : {starMap.map(res => (
                <>
                <img src={res.img} alt="star" />
                </>
                ))}
                </p>    
            </div>
            <div className="job-type">
                <p className='text-[#FF3333] font-poppins text-[18px] leading-[28px] font-normal'>Full Time Job</p>
            </div>
            </div>
        </div>
        <div className="apply-button">
            <button className='border bg-[#FF3333] mx-[50px] my-[70px] text-white rounded-md font-poppins text-[25px] leading-[38px] font-bold uppercase p-3'>Apply Now</button>
        </div>

        <hr />

        <div className="prof-body">
            <div className="wrapper p-3">
                <div className="grid grid-cols-2 ">
                    <div className="job-desc p-12">
                        <h1 className='font-poppins font-normal font-semibold text-[25px] leading-[38px] mb-5'>Job Description</h1>
                        <p className='font-poppins text-justify font-normal text-[18px] leading-[27px]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam nihil sunt iusto velit explicabo dicta. Ducimus quidem optio eligendi consectetur, consequatur blanditiis vel ad ipsum nemo, accusamus ipsa libero? <br /> <br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident tempora aliquam ab mollitia aut id, non sunt facere accusantium, maxime architecto corrupti, quasi dignissimos! Atque quam accusamus excepturi quod nam.<br /> <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium magnam tenetur explicabo. Illo consequuntur perspiciatis ullam similique minima minus illum expedita labore a, eius, iste nostrum sed quam facilis aliquid!<br /> <br />
                        </p>
                    </div>
                    <div className="job-qual p-12">
                    <h1 className='font-poppins font-normal font-semibold text-[25px] leading-[38px] mb-5'>Job Qualification</h1>
                        <p className='font-poppins text-justify font-normal text-[18px] leading-[27px]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam nihil sunt iusto velit explicabo dicta. Ducimus quidem optio eligendi consectetur, consequatur blanditiis vel ad ipsum nemo, accusamus ipsa libero? <br /> <br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident tempora aliquam ab mollitia aut id, non sunt facere accusantium, maxime architecto corrupti, quasi dignissimos! Atque quam accusamus excepturi quod nam.<br /> <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium magnam tenetur explicabo. Illo consequuntur perspiciatis ullam similique minima minus illum expedita labore a, eius, iste nostrum sed quam facilis aliquid!<br /> <br />
                        </p>
                    </div>
                    <div className="job-qual p-12">
                    <h1 className='font-poppins font-normal font-semibold text-[25px] leading-[38px] mb-5'>Ringkasan Pekerjaan</h1>
                        <div className="grid grid-cols-2 gap-[30px]">
                            <div className="div">
                                <p className='font-poppins font-normal text-[18px] uppercase leading-[27px]'>Tingkat Posisi</p>
                                <p className='font-poppins font-normal text-[18px] leading-[27px] text-[#FF3333]'>( Tingkatan Posisi )</p>
                            </div>
                            <div className="div">
                                <p className='font-poppins font-normal text-[18px] uppercase leading-[27px]'>Industri</p>
                                <p className='font-poppins font-normal text-[18px] leading-[27px] text-[#FF3333]'>( Nama Industri )</p>
                            </div>
                            <div className="div">
                                <p className='font-poppins font-normal text-[18px] uppercase leading-[27px]'>Spesialisasi</p>
                                <p className='font-poppins font-normal text-[18px] leading-[27px] text-[#FF3333]'>( Bagian Spesialisasi )</p>
                            </div>
                            <div className="div">
                                 <p className='font-poppins font-normal text-[18px] uppercase leading-[27px]'>Lowongan</p>
                                <p className='font-poppins font-normal text-[18px] leading-[27px] text-[#FF3333]'>( Jumlah Lowongan )</p>
                            </div>
                            <div className="div">
                                 <p className='font-poppins font-normal text-[18px] uppercase leading-[27px]'>Syarat Tingkat Pendidikan</p>
                                <p className='font-poppins font-normal text-[18px] leading-[27px] text-[#FF3333]'>( Syarat Pendidikan )</p>
                            </div>
                            <div className="div">
                                 <p className='font-poppins font-normal text-[18px] uppercase leading-[27px]'>Situs</p>
                                <p className='font-poppins font-normal text-[18px] leading-[27px] text-[#FF3333]'>( www.situs.com )</p>
                            </div>
                            <div className="div">
                                 <p className='font-poppins font-normal text-[18px] uppercase leading-[27px]'>Alamat Kantor</p>
                                <p className='font-poppins font-normal text-[18px] leading-[27px] text-[#FF3333]'>( Alamat Kantor )</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="prof-footer mb-12">
            <div className="wrapper p-12">
                    <div className="about">
                        <h1 className='font-poppins font-semibold text-[25px] leading-[38px] text[#171717] mb-5'>Tentang Perusahaan</h1>
                        <p className='font-poppins font-normal text-[18px] leading-[27px]'>Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. 
                            Similique, deserunt. Voluptate 
                            consectetur reiciendis maiores 
                            ab tempora similique nam perspiciatis 
                            cupiditate dignissimos magnam. Consequuntur 
                            reiciendis doloremque labore eaque, dolore 
                            rerum eos?
                        </p>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default company