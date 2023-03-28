import { Navbar,Footer } from "../components";
import { companyAccount as compAcc } from "../assets"; 
import React,{useEffect} from 'react';



const Img = () => {
    return <img src={compAcc} alt="CompanyAcc" className="w-screen h-none md:h-[820px]  mx-auto object-fit block" />
}



const companyAccount = () => {

    useEffect(() => {
        document.title = "Infoloker | Company Account"
    },[])

  return (
    <div className="overflow-none md:overflow-hidden">
        <div className="navbar">
            <Navbar />
        </div>
        <div className="main-body w-screen h-screen">
            <div className="wrapper p-7">
                <div className="company-page grid grid-cols-1 md:grid-cols-3">
                    <div className="left-grid col-span-2">
                        <Img />
                    </div>
                    <div className="right-grid mt-12">
                        <div className="head flex flex-col ">
                            <h1 className="font-poppins font-bold text-[38px] lg:text-[70px] leading-[135px]">Wanna Post A <span className="text-[#FF3333]">Job</span></h1>
                            <p className="font-poppins font-normal text-[28px] leading-[36px]">Become A Company Account</p>
                            <p className="font-poppins font-normal text-[28px] leading-[36px] text-[#FF3333]">Simple & Quick</p>
                        </div>
                        <div className="foot flex justify-center mt-[130px]">
                            <button className="border bg-[#FF3333] rounded-md uppercase p-[10px] w-[438px] h-[58px] font-poppins font-bold text-[20px] text-[#FFFFFF]">buat akun</button>
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

export default companyAccount;
