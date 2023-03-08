import React from 'react'

const footer = () => {
  return (
    <div className='flex flex-1 items-end inset-x-0 bottom-0 fixed'>
      <div className="footer w-screen flex flex-1 items-center justify-center h-[90px] bg-[#E6E6E6] flex-col">
        <div className="footHeader flex gap-[100px] ">
          <p>Contact Us</p>
          <p>Support Us</p>
        </div>
        <div className="line w-[110rem] h-[1px] bg-black mt-3 mb-3"></div>
        <div className="footFoter">
          <p>© Info Loker 2023 Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default footer