import React, { useState } from 'react'
import './Signin.css'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Signin = () => {
    const [userInput, setUserInput] = useState ({
        name: "",
        email: "",
        password: ""
}); 

    // const [errors, setErrors] = useState({}); // State for tracking errors

    const navigate = useNavigate()

    const handleUserInput = (e)=>{
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        })
        // console.log(userInput);
    }
     
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:8080/register", {
            name: userInput.name,
            email: userInput.email,
            password: userInput.password
        })
        .then(result => {console.log(result)
            navigate("/login")
        })

        .catch(err => console.log(err))

        // Error handling logic
        // const newErrors = { ...errors };

        // Username validation
        // if (name === "name" && (value.length < 6 || value.length > 8)) {
        // newErrors.username = "Username should include 3-8 characters";
        // } else {
        // delete newErrors.name;
        // }
    }

  return (
    <div className='wrapper'>
        <div className='container'>

            <form onSubmit={handleSubmit}>
            <h2>Register</h2>
                <label><strong>Name:</strong></label>
                <input type="text" placeholder='Enter your name'  name='name' onChange={handleUserInput} value={userInput.name}/>
                {/* <span className="error">{errors.name}</span> */}
            
                <label><strong>Email:</strong></label>
                <input type="email" placeholder='Enter your email' name='email' onChange={handleUserInput} value={userInput.email}/>
            
                <label><strong>Password:</strong></label>
                <input type="password" placeholder='Enter your password' name='password' onChange={handleUserInput} value={userInput.password}/>

                <button type='submit'>Register</button>

                <strong>Already have an account?</strong>

                <Link to= "/login" className='loginBtn'>Login</Link>

            </form>
        </div>
    </div>
  )
}

export default Signin