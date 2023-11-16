import React from 'react';
import logo from '../images/EVS FOR ALL.png';
import {Link, NavLink} from 'react-router-dom';

export default function Menubar() {
    return (
        <div id = "menubar">
            <Link to = "" title = "EVs for All Website">
                <img src={logo} alt="EVs for All Website" />
            </Link>
            <nav id = "homenav">
                <a className = "navlinks">Home</a>
                <a className = "navlinks">Buy EVs</a>
                <a className = "navlinks">Rent EVs</a>
                <a className = "navlinks">Lease EVs</a>
                <a className = "navlinks">Find EV Charging Stations</a>
                <a className = "navlinks">More Information</a>
                <div id = "signupDiv">
                    <NavLink id = "signUpButton" to = "/signup">Sign Up</NavLink>
                </div>
                <div id = "loginDiv">
                    <NavLink id = "loginbutton" to = "/login">Login</NavLink>
                </div>
            </nav>
        </div>
    )
}