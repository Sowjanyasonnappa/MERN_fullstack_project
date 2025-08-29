import React, { useState } from 'react'
import axios from "axios"
import "./Register.css" 

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [msg, setMsg] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:3000/auth/register", {
        email,
        password,
      })
      setMsg(res.data.message)
    } catch (error) {
      setMsg(error.message)
    }
  }

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <label>Enter the email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />

        <label>Enter the password</label>
        <input 
          type="password"  
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />

        <button type="submit">Register</button>

        {msg && <p>{msg}</p>}
      </form>
    </div>
  )
}

export default Register
