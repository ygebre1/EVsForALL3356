import React, { useState } from 'react';
import '../styles/Authenticatednav.css';
import profpic from '../images/profpic.png' ;
import logo from '../images/EVS FOR ALL.png';
import {Link, NavLink,useNavigate} from 'react-router-dom';
import { useUser } from '../functions/userContext.js'; 

export default function Authenticatednavjs() {
    const [isDropdownVisible, setDropdownVisibility] = useState(false);
    const { logout } = useUser(); // Destructure the logout function from useUser
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // Call the logout function from the user context
        navigate('/'); // Redirect to the homepage or login page after logout
      };
  
    // Function to toggle the visibility of the dropdown menu
    const toggleDropdown = () => {
      setDropdownVisibility(!isDropdownVisible);
    };
    return (
        <div id = "menubar">
        <Link to = "/" title = "EVs for All Website">
            <img src={logo} alt="EVs for All Website" />
        </Link>
        <nav id = "homenav">
            <a className = "navlinks" href='/HomePage'>Home</a>
            <a className = "navlinks" href='/Buy'>Buy EVs</a>
            <a className = "navlinks" href='/Buy'>Rent EVs</a>
            <a className = "navlinks"href='/HomePage'>Lease EVs</a>
            <a className = "navlinks"href='/HomePage'>Find EV Charging Stations</a>
            <a className = "navlinks"href='/HomePage'>More Information</a>
        </nav>
        <div id="profileImage" onClick={toggleDropdown}>
            <img src={profpic} alt="Profile" />

            {/* Dropdown menu */}
            {isDropdownVisible && (
                <div className="dropdown-menu">
                <ul>
                    <li><NavLink to="/profile-settings">Profile Settings</NavLink></li>
                    <li><NavLink to="/location-settings">Location Settings</NavLink></li>
                    <li><NavLink to="/preferences">Preferences</NavLink></li>
                    <li><NavLink to="/help">Help</NavLink></li>
                    <li><NavLink to="/" onClick={handleLogout}>Logout</NavLink></li>{/* Logout button */}
                </ul>
                </div>
            )}
        </div>
        </div>
    )
}
