import React from 'react';
import '../styles/Signup.css';
import logo from '../images/EVS FOR ALL.png';
import { useState } from "react";
import axios from "axios";
import {Link, NavLink, useNavigate} from 'react-router-dom';

function Signup() {

  //stores input field information, passes to backend
  const [newuser, setNewuser] = useState({
    username: null,
    password: null
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewuser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  //function that runs when clicked sign up button, sends data back to database and 1. checks if already exists, if not add to database
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8800/signup", newuser);
      console.log(response);
      alert("Success");
      navigate("/");
    } catch (err) {
      console.log(err);
      // Check if the error response has a status code of 409 which indicates username exists
      if (err.response && err.response.status === 409) {
        alert("Username already in use");
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };
  

  return (
    <div className="signup-container">
      <div className="signup-logo">
        {/* Include your logo here */}
        <img src={logo} alt="EVs for All" />
      </div>
      <div className="signup-form">
        <h2>Create an Account</h2>
        <form>
          <input type="text" placeholder="Username" onChange={handleChange} name="username"/>
          <input type="text" placeholder="Password" onChange={handleChange} name = "password"/>
          <button type="submit" onClick={handleClick}>Sign Up</button>
          <NavLink to="/" className="button-link">Back</NavLink>
        </form>
      </div>
    </div>
  );
}

export default Signup;
