import React, { useState, useEffect } from 'react';
import '../styles/FilterMenu.css'

export default function Dropdown(props) {
    const [activate, setActivate] = useState(false);
    // makes sure that when someone clicks outside of the filter menu dropdown box it closes
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
            <form onSubmit={props.handleSubmit} className={`${activate ? 'dropdown-content' : 'inactive'}`}>
                <h3>Price</h3>
                <div className = "priceFlex">
                    <input
                        type="number"
                        placeholder='min price'
                        className = "filterInput"
                        name='min'
                        value={props.filter.min}
                        onChange={props.handleChange}
                    />
                    <p className = "filterpara">to</p>
                    <input
                        type="number"
                        placeholder='max price'
                        className = "filterInput"
                        name='max'
                        value={props.filter.max}
                        onChange={props.handleChange}
                    />
                </div>
                <h3 className = "divMarg">Make</h3>
                {props.brands && (
                    <div className = "flexboxx">
                        {props.brands.map((bName, index) => (
                            <div className='priceFlex' key={index}>
                                <input
                                    type="checkbox"
                                    id={bName}
                                    className = "filterInput marginRight5"
                                    name={bName}
                                    onChange={() => props.handleBrands(bName)}
                                />
                                <label htmlFor={bName}>{bName}</label>
                            </div>
                        ))}
                    </div>
                )}
                <h3 className='divMarg'>Electric Range</h3>
                <div className = "priceFlex">
                    <input
                        type="number"
                        placeholder='min price'
                        className = "filterInput"
                        name='low_range'
                        value={props.filter.low_range}
                        onChange={props.handleChange}
                    />
                    <p className = "filterpara">to</p>
                    <input
                        type="number"
                        placeholder='max price'
                        className = "filterInput"
                        name='high_range'
                        value={props.filter.high_range}
                        onChange={props.handleChange}
                    />
                </div>
            </form>
        </div>
    );
}
