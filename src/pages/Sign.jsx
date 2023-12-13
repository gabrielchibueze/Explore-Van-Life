import React, { useState } from "react";
import { Link } from 'react-router-dom'

export default function SignIn (){
    const [loginDetails, setloginDetails] = useState({email: "", password: ""})

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(loginDetails)
    }
    const handleChange = (e) =>{
        const { name, value } = e.target

        setloginDetails(prevValue => ({
            ...prevValue, [name]: value
        }
        ))
    }
    return (
        <div className="signin-page">
            <h3>Welcome to your van host page, You need to sign in to continue</h3>
            <form className="signin-form" onSubmit={handleSubmit}>
                <label>Enter your email address</label>
                <input 
                    name="email" 
                    type="text" 
                    placeholder="Enter your Email"
                    value={loginDetails.email}
                    onChange={handleChange}
                    />
                <label>Enter your password</label>
                <input 
                    name="password"
                    type="password" 
                    placeholder="Enter your login password"
                    value={loginDetails.password}
                    onChange={handleChange}
                    />
                <button className="signin-btn">Sign in</button>
            </form>
        </div>
    )
}