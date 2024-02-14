import React, { useState, useEffect, useCallback } from 'react';
import { useUser } from '../functions/userContext';
import '../styles/Buy.css';
import car1 from '../images/carpic1.jpeg';
import Authenticatednavjs from '../sections/Authenticatednav.js';
import Search from '../sections/LocationSearchBar.js'
import '../styles/Car.css';
import Dropdown from '../sections/SortMenu.js';
import Filter from '../sections/FilterMenu.js';

function Car({ id, name, price, image, mpg, capacity,  onStar, onUnstar }) {
  const [starred, setStarred] = useState(null); // State to store the fetched data

  // Async function to fetch data
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8800/is-starred' , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ vehicle_id: id})
      }) ;
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const starred = await response.json(); // Assuming the response is JSON
      setStarred(starred); // Update the state with the fetched data
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  // useEffect to call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this runs once on mount
  JSON.stringify(starred)

  console.log('starred :' + starred) ;

    const toggleStar = () => {
    if (starred) {
      onUnstar();  // Call the function to unstar the car
    } else {
      onStar();    // Call the function to star the car
    }
    
    setStarred(!starred);
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
      <button className="buy-now">See Available Locations</button>
    </div>
  );

}

const Buy = () => {
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


  const handleStar = async (currentUser,vehicleId,price) => {
  console.log('price :' + price) ;
    await fetch('http://localhost:8800/star-vehicle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ username: currentUser, vehicle_id: vehicleId, price: price })
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
   // fetchStarredVehicles();
  };
  
  const handleUnstar = async (currentUser,vehicleId) => {
    await fetch('http://localhost:8800/unstar-vehicle', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ username: currentUser, vehicle_id: vehicleId })
    });
  //  fetchStarredVehicles();
  };

  const sortMenuItems = [
    { title: 'Default (Sort by)'},
    { title: 'Price (lowest to highest)'},
    { title: 'Price (highest to lowest)'},
    { title: 'Alphabetically (A-Z)'}
  ];

  const [changer, setChanger] = useState("Default (Sort by)")

  return (
    <div>
      <Authenticatednavjs />
      <div className = "flexbox">
        <Search/>
        <div>
          <Dropdown
            items={sortMenuItems}
            dropdown = "dropdown-content"
            buttonClass = "dropbtn"
            buttonTrigger={changer}
            changer={setChanger}
          />
          <Filter
            dropdown = "dropdown-content"
            buttonClass = "dropbtn"
            buttonTrigger="Default (Filter by)"
          />
        </div>
      </div>
      
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
            onStar={() => handleStar(currentUser,car.id, car.price)}
            onUnstar={() => handleUnstar(currentUser,car.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Buy;
