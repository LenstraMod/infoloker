import styles from "../style";
import { Navbar,Footer,Hero } from "../components";
import { useState, useEffect } from "react";
import {Signup} from '../assets';
import {Link} from 'react-router-dom';



const Register = () => {

    const initialValues = { username: "" ,email: "",phone: "",gender: "",  password: "" ,confirm: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit,SetIsSubmit] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value})
       
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(formValues))
        SetIsSubmit(true)
        console.log(formValues)
    }

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit ? alert("Signed Up Success") : "failed"){
            console.log(formValues);
        }
    },[formErrors])

    const validate = (values) =>{
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\[^\s@]{2,}$/i;

        if(!values.username){
            errors.username = "Username is required!";
        }
        if(!values.email){
            errors.email = "Email is required!";
        }
        else if(regex.test(values.email)){
            errors.email = "This is not a valid email format!"
        }
        if(!values.phone){
            errors.phone = "Phone is required!";
        }
        if(!values.gender){
            errors.gender = "Choose a gender!";
        }
        if(!values.password){
            errors.password = "Password is required!";
        }
        else if(values.password.length < 4){
            errors.password = "Password must be more than 4 characters!"
        }
        if(!values.confirm){
            errors.confirm = "Confirm Password is required!";
        }
        else if(values.password ==! values.confirm){
            errors.confirm = "Password does not match!";
        }
        return errors;
    }

  return (
    <div className="w-full bg-white overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <Navbar />
        </div>
      </div>
      
      <div className={`${styles.flexStart} bg-white`}>
          <div className="login flex justify-center w-fit mt-[50px] h-[700px] sm:mt-[50px] pb-1">
            <div className="flex justify-center items-center w-[350px] rounded-md shadow-2xl sm:w-fit">
              <div className="image hidden sm:block px-10">
                <img src={Signup} alt="login" />
              </div>
              <div className="form mx-[100px]">
                <form className="grid grid-cols-1 gap-10" onSubmit={handleSubmit}>
                  <input type="text" 
                  className="border bg-[#F5F5F5] rounded-md p-1 sm:p-3 active:bg-white" 
                  placeholder="Nama Lengkap" 
                  name="username"
                  value={formValues.username} 
                  onChange={handleChange}/>
                  <p className="text-red-600 absolute mt-[40px] sm:mt-[55px]">{formErrors.username}</p>

                  <input 
                   type="email" 
                   className="border bg-[#F5F5F5] rounded-md p-1 sm:p-3" 
                   placeholder="Email"
                   name="email"
                   value={formValues.email}
                   onChange={handleChange}
                   />
                    <p className="text-red-600 absolute mt-[115px] sm:mt-[150px]">{formErrors.email}</p>

                  <input 
                  type="number" 
                  className="border bg-[#F5F5F5] rounded-md p-1 sm:p-3 " 
                  placeholder="Phone"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  />
                  <p className="text-red-600 absolute mt-[190px] sm:mt-[240px]">{formErrors.phone}</p>

                  <select className="border bg-[#F5F5F5] rounded-md p-1 sm:p-3"
                  name="gender"
                  value={formValues.gender}
                  onChange={handleChange}
                  >
                    <option value="none" hidden selected>Gender</option>
                    <option value="laki">Laki Laki</option>
                    <option value="perempuan">Perempuan</option>
                  </select>
                  <p className="text-red-600 absolute mt-[265px] sm:mt-[325px]">{formErrors.gender}</p>

                  <input 
                  type="password" 
                  className="border bg-[#F5F5F5] rounded-md p-1 sm:p-3" 
                  placeholder="Password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  />
                  <p className="text-red-600 absolute mt-[335px] sm:mt-[415px]">{formErrors.password}</p>

                  <input 
                  type="password" 
                  className="border bg-[#F5F5F5] rounded-md p-1 sm:p-3" 
                  placeholder="Confirm Password"
                  name="confirm"
                  value={formValues.confirm}
                  onChange={handleChange}
                  />
                   <p className="text-red-600 absolute mt-[405px] sm:mt-[505px]">{formErrors.confirm}</p>

                  <div className="btn flex justify-center gap-10">
                  <Link to="/login"><button className="border py-[16px] px-[12px] w-[95px] h-[fit] rounded-md bg-red-600 text-white font-poppins outline-2 outline-red-600 text-[15px] hover:bg-red-900" >Login</button></Link>
                  <button className="border py-[16px] px-[12px] w-[95px] h-[fit] rounded-md outline outline-offset-2 outline-2 outline-red-600 text-[15px] hover:outline-red-700">REGISTER</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register