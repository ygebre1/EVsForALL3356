// Combined JavaScript file

// Contents of Car.js
// Car.js
import React, { useState } from 'react';
import '../styles/Car.css';

function Car({ id, name, price, image, mpg, capacity }) {
  const [starred, setStarred] = useState(false);

  const toggleStar = () => {
    setStarred(!starred);
    // Handle saving the preference for the starred car by id
  };

  return (
    <div className="car" id={`car-${id}`}>
      <img src={image} alt={`${name}`} />
      <h2>{name}</h2>
      <div>MPGe: {mpg}</div>
      <div>Capacity: {capacity} People</div>
      <div className="price">${price}</div>
      <button onClick={toggleStar} className={`star ${starred ? 'starred' : ''}`}>
        {starred ? '★' : '☆'}
      </button>
      <button className="buy-now">Buy Now</button>
    </div>
  );
}

export default Car;


// Contents of Buy.js
import React, { useState, useEffect, useCallback } from 'react';
// Car component is included above
import { useUser } from '../functions/userContext';
import '../styles/Buy.css';
import car1 from '../images/carpic1.jpeg';
import Authenticatednavjs from '../sections/Authenticatednav.js';

const Buy = () => {
  const { user: currentUser } = useUser();
  const [starredVehicles, setStarredVehicles] = useState([]);

  const fetchStarredVehicles = useCallback(async () => {
    console.log("Inside fetchedStarredVehicles");
    if (currentUser) {
      const response = await fetch(`/user-stars?username=${currentUser.username}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setStarredVehicles(data);
      }
    }
  }, [currentUser]);

  useEffect(() => {
    fetchStarredVehicles();
  }, [fetchStarredVehicles]);

  const handleStar = async (currentUser,vehicleId) => {
    await fetch('/star-vehicle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ username: currentUser, vehicle_id: vehicleId })
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    }).then(data => {
      console.log(data);
    }).catch(error => {
      console.error('Fetch error:', error);
    });
    fetchStarredVehicles();
  };

  const handleUnstar = async (currentUser,vehicleId) => {
    await fetch('/unstar-vehicle', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ username: currentUser, vehicle_id: vehicleId })
    });
    fetchStarredVehicles();
  };

  // Dummy data array for cars
  const cars = [
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


  return (
    <div>
       <Authenticatednavjs />
      <div className="buy-page">
        {cars.map((car) => (
          <Car
            key={car.id}
            id={car.id}
            name={car.name}
            price={car.price}
            image={car.image}
            mpg={car.mpg}
            capacity={car.capacity}
            isStarred={starredVehicles.some(starredVehicle => starredVehicle.id === car.id)}
            onStar={() => handleStar(currentUser,car.id)}
            onUnstar={() => handleUnstar(currentUser,car.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Buy;
