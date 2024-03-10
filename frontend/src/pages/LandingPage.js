import React from 'react';
import Menubar from '../sections/Menubar.js';
import Tesla from '../images/tesla.jpeg';

export default function Homepage() {
    return (
        <div>
            <Menubar />
            <div id = "homeInfo">
                <div id = "textinfo">
                <h2 id="trustedCar">Welcome to EV's For All<br/>Driving Inclusivity in Electric Mobility</h2>
                    <h1 id = "fastSearch">Your Journey Starts Here: Discover, Charge, Drive </h1>
                    <p id = "parainfo">At EV's For All, we're not just about electric vehicles; We're about making EVs accessible to everyone. Our app is your all-in-one resource for exploring, finding, and embracing electric mobility with ease, no matter where you come from.
                    </p>
                </div>
                <img id = "tesla" src = {Tesla} alt = "The Future of EVs: Tesla"/>
            </div>
            
        </div>
    )
}