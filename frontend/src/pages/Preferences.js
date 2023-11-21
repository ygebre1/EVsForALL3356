// Preferences.js

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Preferences.css'; // Make sure to create this CSS file
import logo from '../images/EVS FOR ALL.png';

const Preferences = () => {
    return (
      <div className="preferences-container">
        <div className="preferences-navbar">
          <Link to="/HomePage" title="EVs for All Website">
            <img src={logo} alt="EVs for All Website" />
          </Link>
          <NavLink to="/HomePage" className="preferences-navlink" activeClassName="active-navlink">
            Return Home
          </NavLink>
          <NavLink to="/Preferences" className="preferences-navlink" activeClassName="active-navlink">
            Profile Settings
          </NavLink>
          <NavLink to="/Preferences" className="preferences-navlink" activeClassName="active-navlink">
            Location Settings
          </NavLink>
          <NavLink to="/Preferences" className="preferences-navlink" activeClassName="active-navlink">
            Preferences
          </NavLink>
          <NavLink to="/Preferences" className="preferences-navlink" activeClassName="active-navlink">
            Help
          </NavLink>
        </div>
        <div className="preferences-content">
          {/* Your preferences page content goes here */}
          <h1>Preferences Page</h1>
        </div>
      </div>
    );
  };

export default Preferences;