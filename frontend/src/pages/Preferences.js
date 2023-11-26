import React, { useState, useEffect } from 'react';
import { useUser } from '../functions/userContext';
import '../styles/Preferences.css';
import car1 from '../images/carpic1.jpeg';
import Authenticatednavjs from '../sections/Authenticatednav.js';

function Car({ id, name, price, image, mpg, capacity,  onStar, onUnstar }) {

  return (
    <div className="car" id={`car-${id}`}>
      <img src={image} alt={`${name}`} />
      <h2>{name}</h2>
      <div>MPGe: {mpg}</div>
      <div>Capacity: {capacity} People</div>
      <div className="price">${price}</div>
      <button  className= 'starred' >
        {'★'}
      </button>
      <button className="buy-now">See Available Locations</button>
    </div>
  );

}

const Preferences = () => {
  const { user: currentUser } = useUser();
  
  const cars = [
    // ... your car objects here ...
    { id: 1, name: 'Audi e-tron GT 2022', price: 30000, image: car1, mpg: 94, capacity: 5 },
    { id: 2, name: 'Audi e-tron GT 2021', price: 20000, image: car1, mpg: 94, capacity: 5 },
    { id: 3, name: 'Audi e-tron GT 2024', price: 10000, image: car1, mpg: 94, capacity: 5 },
    { id: 4, name: 'Audi e-tron GT 2012', price: 40000, image: car1, mpg: 94, capacity: 5 },
    { id: 5, name: 'Audi e-tron GT 2011', price: 50000, image: car1, mpg: 94, capacity: 5 },
    { id: 6, name: 'Audi e-tron GT 2010', price: 70000, image: car1, mpg: 94, capacity: 5 },
    { id: 7, name: 'Audi e-tron GT 2022', price: 30000, image: car1, mpg: 94, capacity: 5 },
    { id: 8, name: 'Audi e-tron GT 2022', price: 30000, image: car1, mpg: 94, capacity: 5 },
    { id: 9, name: 'Audi e-tron GT 2022', price: 30000, image: car1, mpg: 94, capacity: 5 }
  ];

  const [starredStatuses, setStarredStatuses] = useState({});



  // Async function to fetch starred status for all cars
  const fetchAllStarredStatuses = async () => {
    // Create a structure to store the starred status of each car
    let statuses = {};
    try {
      for (const car of cars) {
        const response = await fetch('http://localhost:8800/is-starred', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({ vehicle_id: car.id })
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const starred = await response.json();
        statuses[car.id] = starred;
      }
      setStarredStatuses(statuses);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  // useEffect to call fetchAllStarredStatuses on component mount
  useEffect(() => {
    fetchAllStarredStatuses();
  }, []);


  return (
    <div>
       <Authenticatednavjs />
      <div className="preferences-content">
        {/* Your preferences page content goes here */}
        <h1>Preferences Page</h1>
      </div>
        <div className="buy-page">
        {cars.filter(car => starredStatuses[car.id]).map(car =>
          <Car
            key={car.id}
            id={car.id}
            name={car.name}
            price={car.price}
            image={car.image}
            mpg={car.mpg}
            capacity={car.capacity}
          />
        )}
        </div>
    </div>
  );
};




export default Preferences;