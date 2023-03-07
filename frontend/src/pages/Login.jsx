import styles from "../style";
import { Navbar,Footer,Hero } from "../components";
import { useState, useEffect } from "react";
import {Login} from '../assets';
import { Link } from 'react-router-dom'

export default function LoginPage() {

    const initialValues = {email: "", password: ""};
    const [formValues,setFormValues] = useState(initialValues);
    const [formErrors,setFormErrors]= useState({});
    const [isSubmit,setIsSubmit] = useState(false)
    const [loading,Setloading] = useState(false)

    const handleChange = (e) =>{
      const { name,value } = e.target;
      setFormValues({...formValues,[name]: value})
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      setIsSubmit(true) ;
      setFormErrors(validate(formValues))
      console.log(formValues);
      localStorage.setItem('email', formValues.email);
      localStorage.setItem('password', formValues.password);
    }
    useEffect(() => {
      console.log(formErrors);
      if(Object.keys(formErrors.length === 0 && isSubmit)){
        console.log(formValues)
      }
    },[formErrors])

    const validate = (values) =>{
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\[^\s@]{2,}$/i;

      if(!values.email){
        errors.email = "Email is Required"
       
      }
      else if(regex.test(values.email)){
        errors.email = "This is not a valid email format!"
    }
      if(!values.password){
        errors.password = "Password is Required"
      }
      return errors
    }


  return (
    <div className="w-full bg-white overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <Navbar />
        </div>
      </div>
      
      <div className={`${styles.flexStart} bg-white`}>
          <div className="login flex justify-center w-fit mt-[50px] h-[700px] sm:mt-[100px] pb-1">
            <div className="flex justify-center items-center w-[350px] rounded-md shadow-2xl sm:w-fit">
              <div className="image hidden sm:block">
                <img src={Login} alt="login" />
              </div>
              <div className="form mx-[100px]">
                <h1 className="font-bold text-red-600 text-[35px] mb-20 font-poppins sm:text-[45px] text-center">LOGIN</h1>
                <form className="grid grid-cols-1 gap-10" onSubmit={handleSubmit}>
                  <input type="email" className="border bg-[#F5F5F5] rounded-md p-1 sm:p-3 " placeholder="Email" name="email" value={formValues.email} onChange={handleChange}/>
                  <p className="text-red-600">{formErrors.email}</p>
                  <input type="password" className="border bg-[#F5F5F5] rounded-md p-1 sm:p-3" placeholder="Password" name="password" value={formValues.password} onChange={handleChange} />
                  <p className="text-red-600">{formErrors.password}</p>
                  <div className="btn flex justify-center gap-10">
                  <button className="border py-[16px] px-[12px] w-[95px] h-[fit] rounded-md bg-red-600 text-white font-poppins hover:bg-red-700 text-[15px]" value={loading? 'Loading...' : 'Login'} type="submit">LOGIN</button>
                 <Link to="/register"> <button className="border py-[16px] px-[12px] w-[95px] h-[fit] rounded-md outline outline-offset-2 outline-2 outline-red-600 text-[15px] hover:outline-red-700">REGISTER</button></Link>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}