import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [userInput, setuserInput] = useState({
        email: '',
        password: ''
    })

    const handleUserInput = (e)=>{
        setuserInput({
            ...userInput,
            [e.target.name]:e.target.value
        })
        // console.log(userInput);
        
    }

    const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/login", {
            email: userInput.email,
            password: userInput.password
        })
        .then(result => {console.log(result)
            if(result.data === "success"){
                navigate('/home')
            }
        })
        .catch(err => console.log(err))
    }

  return (
    
    <div className='wrapper'>
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                    {/* <label><strong>Name:</strong></label>
                    <input type="text" placeholder='Enter your name' name='fullname'/> */}
                
                    <label><strong>Email:</strong></label>
                    <input type="email" placeholder='Enter your email' name='email' onChange={handleUserInput} value={userInput.email}/>
                
                    <label><strong>Password:</strong></label>
                    <input type="password" placeholder='Enter your password' name='password' onChange={handleUserInput} value={userInput.password}/>

                    <p></p>

                    <button type='submit'>Login</button>

                    
                    <strong>Don't have an account?</strong>

                <Link to= "/" className='loginBtn'>Sign up</Link>
            </form>
        </div>
    </div>
    
  )
}

export default Login