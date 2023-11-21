import React from 'react';
import '../styles/Navbar.css'; 
import logo from '../images/EVS FOR ALL.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="navbar-logo" alt="EV's FOR ALL Logo" /> 
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/buy">Buy EVs</a>
        <a href="/rent">Rent EVs</a>
        <a href="/lease">Lease EVs</a>
        <a href="/stations">Find EV Charging Stations</a>
        <a href="/info">More Information</a>
      </div>
      <div className="navbar-buttons">
        <button onClick={() => {/* Handle log out logic here */}}>Log Out</button>
      </div>
    </nav>
  );
};

export default Navbar;
