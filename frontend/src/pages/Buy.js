// Buy.js
import React from 'react';
import Car from './Car'; // Import the Car component
import '../styles/Buy.css';
import car1 from '../images/../images/carpic1.jpeg';
import Navbar from '../sections/Navbar.js';


// Dummy data array for cars
const cars = [
  // Example car object with an id property
  { id: 1, name: 'Audi e-tron GT 2022', price: 30000, image: car1, mpg: 94, capacity: 5 },
  { id: 2, name: 'Audi e-tron GT 2021', price: 20000, image: car1, mpg: 94, capacity: 5 },
  { id: 3, name: 'Audi e-tron GT 2024', price: 10000, image: car1, mpg: 94, capacity: 5 },
  { id: 4, name: 'Audi e-tron GT 2012', price: 40000, image: car1, mpg: 94, capacity: 5 },
  { id: 5, name: 'Audi e-tron GT 2011', price: 50000, image: car1, mpg: 94, capacity: 5 },
  { id: 6, name: 'Audi e-tron GT 2010', price: 70000, image: car1, mpg: 94, capacity: 5 },
  { id: 1, name: 'Audi e-tron GT 2022', price: 30000, image: car1, mpg: 94, capacity: 5 },
  { id: 1, name: 'Audi e-tron GT 2022', price: 30000, image: car1, mpg: 94, capacity: 5 },
  { id: 1, name: 'Audi e-tron GT 2022', price: 30000, image: car1, mpg: 94, capacity: 5 },
  { id: 1, name: 'Audi e-tron GT 2022', price: 30000, image: car1, mpg: 94, capacity: 5 },
  // ... Add 9 more car objects with unique ids
];

function Buy() {
  return (
    <div>
        <Navbar />
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
            />
        ))}
        </div>
    </div>
  );
}

export default Buy;
