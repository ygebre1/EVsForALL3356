import React from 'react';
import '../styles/Signup.css';
import logo from '../images/EVS FOR ALL.png';
import {Link, NavLink} from 'react-router-dom';

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-logo">
        {/* Include your logo here */}
        <img src={logo} alt="EVs for All" />
      </div>
      <div className="signup-form">
        <h2>Create an Account</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button type="submit">Sign Up</button>
          <NavLink to="/" className="button-link">Back</NavLink>
        </form>
      </div>
    </div>
  );
}

export default Signup;
