import { useEffect } from "react"
import { Navbar } from "../components"

const notFound = () => {

  useEffect(() => {
    document.title = "404 Not Found"
  },[])

  return(
    <>
    <div className="navbar">
      <Navbar />
    </div>
    <div className="flex flex-1 justify-center mt-[30%] p-5 lg:p-2 lg:mt-[20%]">
      <h1 className="font-poppins font-bold text-[30px] lg:text-[100px]">PAGE NOT FOUND <span className="text-red-500">(404 )</span></h1>
    </div>
    </>
  )
}

export default notFound