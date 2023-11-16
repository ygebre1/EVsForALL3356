import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Login.css';
import logo from '../images/EVS FOR ALL.png';

function Login() {
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
              <input type="text" id="username" placeholder="JohnSmith" />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="••••••••" />
            </div>
            <button type="submit" className="login-button">Login</button>
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