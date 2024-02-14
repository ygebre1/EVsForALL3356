import React, { useState, useEffect } from 'react';
import '../styles/FilterMenu.css'

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

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className="dropdown">
            <button onClick={dropActivate} className={`${activate ? `${props.buttonClass} white` : props.buttonClass}`}>
                {props.buttonTrigger}
            </button>
            <div className={`${activate ? 'dropdown-content' : 'inactive'}`}>
                <h3>Price</h3>
                <div className = "priceFlex">
                    <input
                        type="number"
                        placeholder='min price'
                        className = "filterInput"
                    />
                    <p className = "filterpara">to</p>
                    <input
                        type="number"
                        placeholder='max price'
                        className = "filterInput"
                    />
                </div>
                <h3 className = "divMarg">Make</h3>
                <div>
                    <form onSubmit={handleSubmit} className = "flexboxx">
                        <div className = "priceFlex">
                            <input
                                type="checkbox"
                                id="Toyota"
                                className = "filterInput marginRight5"
                            />
                            <label htmlFor='Toyota'>Toyota</label>
                        </div>
                        <div className = "priceFlex">
                            <input
                                type="checkbox"
                                id="BMW"
                                className = "filterInput marginRight5"
                            />
                            <label htmlFor='BMW'>BMW</label>
                        </div>
                        <div className = "priceFlex">
                            <input
                                type="checkbox"
                                id="Tesla"
                                className = "filterInput marginRight5"
                            />
                            <label htmlFor='Tesla'>Tesla</label>
                        </div>
                    </form>
                </div>
                <h3 className = "divMarg">Year</h3>
                <div>
                    <form onSubmit={handleSubmit} className = "flexboxx">
                        <div className = "priceFlex">
                            <input
                                type="checkbox"
                                id="2020"
                                className = "filterInput marginRight5"
                            />
                            <label htmlFor='2020'>2020</label>
                        </div>
                        <div className = "priceFlex">
                            <input
                                type="checkbox"
                                id="2021"
                                className = "filterInput marginRight5"
                            />
                            <label htmlFor='2021'>2021</label>
                        </div>
                        <div className = "priceFlex">
                            <input
                                type="checkbox"
                                id="2022"
                                className = "filterInput marginRight5"
                            />
                            <label htmlFor='2022'>2022</label>
                        </div>
                        <div className = "priceFlex">
                            <input
                                type="checkbox"
                                id="2023"
                                className = "filterInput marginRight5"
                            />
                            <label htmlFor='2023'>2023</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
