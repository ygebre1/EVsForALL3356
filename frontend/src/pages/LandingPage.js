import React from 'react';
import Menubar from '../sections/Menubar.js';
import EVsForAllImage from '../images/EVS FOR ALL.png'; 

export default function Homepage() {
    return (
        <div>
            <Menubar />
            <div id = "homeInfo">
            <img id="evsForAll" src={EVsForAllImage} alt="EVS For All"/>
                <div id = "textinfo">
                <h2 id="trustedCar">Welcome to EV's For All<br/>Driving Inclusivity in Electric Mobility</h2>
                    <h1 id = "fastSearch">Your Journey Starts Here: Discover, Charge, Drive </h1>
                    <p id = "parainfo">At EV's For All, we're not just about electric vehicles; We're about making EVs accessible to everyone. Our app is your all-in-one resource for exploring, finding, and embracing electric mobility with ease, no matter where you come from.
                    </p>
                    <p>Finding the perfect EV for your needs is made simple through our intuitive interface. Whether you're a seasoned EV enthusiast or new to the concept, our platform caters to your needs. </p>
                </div>
            </div>
            
        </div>
    )
}