import React, { useState } from 'react'
import axios from "axios"
import "./Login.css"  

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [msg, setMsg] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
     try {
      const res = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      })
      console.log("token from backend:", res.data.token);
      localStorage.setItem("token", res.data.token)
      setMsg(res.data.message)
    } catch (error) {
      setMsg(error.message)
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

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

        <button type="submit">Login</button>

        {msg && <p>{msg}</p>}
      </form>
    </div>
  )
}

export default Login
