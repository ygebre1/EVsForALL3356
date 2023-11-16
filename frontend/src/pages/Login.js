import React from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import '../styles/Login.css';
import logo from '../images/EVS FOR ALL.png';
import { useState } from "react";
import axios from "axios";

function Login() {

  //stores input field information, passes to backend
  const [user, setUser] = useState({
    username: null,
    password: null
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  //function that runs when clicked Login button, sends data back to database and see if valid login information
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8800/logins", user);
      console.log(response);
      alert("Success");

      //edit here to new page if successfully logins 99999
      navigate("/");

    } catch (err) {
      console.log(err);
      // Check if the error response has a status code of 409 which indicates username exists
      alert("Incorrect login details");
    }
  };




    return (
      <div className="login-container">
        <div className="login-logo">
          <img src={logo} alt="EVs for All" />
        </div>
        <h1>EV's for All</h1>
        <div className="login-form">
          <form>
            <div className="input-container">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Username" onChange={handleChange} name="username"/>
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password" onChange={handleChange} name = "password"/>
            </div>
            <button type="submit" className="login-button" onClick={handleClick}>Login</button>
            <NavLink to="/" className="action-button">Back</NavLink>
          </form>
          <div className="login-links">
            <NavLink to="/forgot-password">Forgot Password?</NavLink>
            <NavLink to="/signup">Don’t have an account yet? Create Account</NavLink>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;