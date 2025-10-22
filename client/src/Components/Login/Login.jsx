import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import { useState } from 'react'
import axios from "axios"


export const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
      console.log("Form submitted!", username, password);
    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      setIsLoggedIn(true);
      alert("✅ Logged in!");
    } catch (err) {
      console.error(err);
      alert("❌ Login failed");
    }
  };

  return (
    <div>
        <Navbar/>
        <div className='d-flex justify-content-center align-items-center vh-100'>
        <form onSubmit={handleSubmit} className='mt-5 p-4 border rounded bg-light' style={{ minWidth: "300px" }}>
        <div className="mb-3">
          <label htmlFor="usernameInput" className="form-label">Username</label>
          <input 
            type="text" 
            className="form-control" 
            id="usernameInput" 
            placeholder="Enter your username"
            value={username}
        onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input 
          type="password" 
          className="form-control" 
          id="exampleInputPassword1"
          value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    
    </div>
    <Footer/>
    </div>
  )
}
