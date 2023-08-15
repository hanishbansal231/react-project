import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
function SignForm({setIsLoggedIn}) {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        comfirmPassword: "",
    });
    function changeHandler(event) {
        const {name, value} = event.target;
        setFormData(prev => (
            {
                ...prev,
                [name]: value,
            }
        ))
    }
    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.comfirmPassword){
            toast.error("Password Don't Match");
            return ;
        }
        setIsLoggedIn(true);
        toast.success('Account is created');
        const accountData = {
            ...formData
        }
        console.log(accountData);
        navigate("/dashboard");
    }
    return (
        <div>
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        <p>First Name <sup>*</sup></p>
                        <input required type='text' value={formData.firstname} name='firstname' onChange={changeHandler} />
                    </label>
                    <label>
                        <p>Last Name <sup>*</sup></p>
                        <input required type='text' value={formData.lastname} name='lastname' onChange={changeHandler} />
                    </label>
                </div>
                <label>
                    <p>Email Address <sup>*</sup></p>
                    <input required type='email' value={formData.email} name='email' onChange={changeHandler} />
                </label>
                <div>
                    <label>
                        <p>Create Password <sup>*</sup></p>
                        <input required type={showPassword ? ("text") : ("password")} value={formData.password} name='password' onChange={changeHandler} />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiFillEyeInvisible />) : (< AiFillEye />)}
                        </span>
                    </label>
                    <label>
                        <p>Confirm Password <sup>*</sup></p>
                        <input required type={showPassword ? ("text") : ("password")} value={formData.comfirmPassword} name='comfirmPassword' onChange={changeHandler} />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiFillEyeInvisible />) : (< AiFillEye />)}
                        </span>
                    </label>
                </div>
                <button>Create Form</button>
            </form>
        </div>
    )
}

export default SignForm