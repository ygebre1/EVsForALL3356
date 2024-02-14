import React, { useState, useEffect } from 'react';
import '../styles/Dropdown.css'

export default function Dropdown(props) {
    const [activate, setActivate] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (!event.target.closest('.dropdown') && activate) {
                setActivate(false);
            }
        }
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [activate]);

    function dropActivate() {
        setActivate(prevActivate => !prevActivate);
    }

    return (
        <div className="dropdown">
            <button onClick={dropActivate} className={`${activate ? `${props.buttonClass} white` : props.buttonClass}`}>
                {props.buttonTrigger}
            </button>
            <div className={`${activate ? 'dropdown-content' : 'inactive'}`}>
                {props.items.map((item, index) => (
                    <button key={index} onClick={() => {props.changer(item.title); dropActivate();}} className = "buttonDrop">
                        {item.title}
                    </button>
                ))}
            </div>
        </div>
    );
}
