import React, { useState } from 'react';
import '../styles/Homepage.css';
import Tesla from '../images/tesla.jpeg';
import profpic from '../images/profpic.png' ;
import logo from '../images/EVS FOR ALL.png';
import {Link, NavLink} from 'react-router-dom';

export default function HomePage() {
    const [isDropdownVisible, setDropdownVisibility] = useState(false);

    // Function to toggle the visibility of the dropdown menu
    const toggleDropdown = () => {
      setDropdownVisibility(!isDropdownVisible);
    };
    return (
        <div>
            <div id = "menubar">
            <Link to = "/" title = "EVs for All Website">
                <img src={logo} alt="EVs for All Website" />
            </Link>
            <nav id = "homenav">
                <a className = "navlinks" href='/HomePage'>Home</a>
                <a className = "navlinks" href='/Buy'>Buy EVs</a>
                <a className = "navlinks">Rent EVs</a>
                <a className = "navlinks">Lease EVs</a>
                <a className = "navlinks">Find EV Charging Stations</a>
                <a className = "navlinks">More Information</a>
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
                    </ul>
                    </div>
                )}
            </div>
            </div>
            <div id = "homeInfo">
                <div id = "textinfo">
                    <h2 id = "trustedCar">The Most Trusted Car Service in America</h2>
                    <h1 id = "fastSearch">The Fast and Easy Way to <br/>Search for Your Car.</h1>
                    <p id = "parainfo">
                        Experience the convenience of our car rental platform, meticulously crafted
                        for our car rental business owners. Our online system seamlessly redirects you
                        to the dealership of your choice, making your car rental process effortlessly
                        efficient. Already an EV owner? That's fine, locate charging stations near you
                        for quick and easy charging!
                    </p>
                    <div className = "buttonLink">
                        <NavLink className = "buttonText" to = "/login">Find Charging Stations Near Me</NavLink>
                    </div>
                    <div className = "buttonLink">
                        <NavLink className = "buttonText" to = "/login">Buy, Rent, or Lease EVs</NavLink>
                    </div>
                </div>
                <img id = "tesla" src = {Tesla} alt = "The Future of EVs: Tesla"/>
            </div>
            
        </div>
    )
}