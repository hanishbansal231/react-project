import React, { useState } from 'react';
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai';
import {Link, useNavigate} from 'react-router-dom';
import { toast } from 'react-hot-toast';
function LoginForm({setIsLoggedIn}) {
    const [showPassword,setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        email:"",
        password:"",
    });
    function changeHandler(event){
        const {value,name} = event.target;
        setFormData(prev => (
           {
            ...prev,
            [name]: value,
           }
        ))
    }
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate('/dashboard');
    }
  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>Email Address<sup>*</sup></p>
            <input type='email' value={formData.email} onChange={changeHandler} placeholder='Enter Email Id' required name='email' />
        </label> 
        <label>
            <p>Email Address<sup>*</sup></p>
            <input type={showPassword ?("text"):("password")} name='password' value={formData.password} onChange={changeHandler} placeholder='Enter Password' required />
            <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiFillEyeInvisible />) :(< AiFillEye/>)}
            </span>
            <Link to="#" >
               <p> Forget Password</p>
            </Link>
        </label> 
        <button>Sign In</button>
    </form>
  )
}

export default LoginForm