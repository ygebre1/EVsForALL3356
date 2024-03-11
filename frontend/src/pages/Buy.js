import React, { useState, useEffect, useMemo} from 'react';
import '../styles/Buy.css';
import Authenticatednavjs from '../sections/Authenticatednav.js';
import Search from '../sections/LocationSearchBar.js'
import '../styles/Car.css';
import Dropdown from '../sections/SortMenu.js';
import Filter from '../sections/FilterMenu.js';
import Randomizer from '../functions/Randomizer.js';

const Buy = () => {

  //------

  // State to store fetched cars
  const [cars, setCars] = useState([]);

  //cars variable format: an array of car objects:

  // [
  //   {
  //     "id": 1,
  //     "manufacturer_name": "Tesla",
  //     "model": "Model S",
  //     "model_year": 2022,
  //     "photo_url": "https://example.com/tesla-model-s.jpg",
  //     "electric_range": 390,
  //     "fuel_name": "Electric",
  //     "drivetrain": "AWD",
  //     "seating_capacity": 5
  //   },
  //   {
  //     "id": 2,
  //     "manufacturer_name": "Chevrolet",
  //     "model": "Bolt EV",
  //     "model_year": 2021,
  //     "photo_url": "https://example.com/chevrolet-bolt.jpg",
  //     "electric_range": 259,
  //     "fuel_name": "Electric",
  //     "drivetrain": "FWD",
  //     "seating_capacity": 5
  //   },
  //   //car objects...
  // ]

  // Function to fetch cars from backend
  const fetchCars = async () => {
    try {
      const response = await fetch('http://localhost:8800/light-duty-automobiles');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      console.log(data)
      // Assuming the backend returns an array of cars
      setCars(data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  // useEffect to call fetchCars on component mount
  useEffect(() => {
    fetchCars();
  }, []);



  const sortMenuItems = [
    { title: 'Default (Sort by)' },
    { title: 'Price (lowest to highest)' },
    { title: 'Price (highest to lowest)' },
    { title: 'Alphabetically (A-Z)' }
  ];

  const [filter, setFilter] = useState({
    min: 0,
    max: 140000,
    audi: undefined,
    bmw: undefined,
    tesla: undefined,
    year: undefined
  })

  function handleFilterChange(e) {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
  
    setFilter(prev => ({
      ...prev,
      [name]: newValue
    }));
    console.log(filter);
  }  

  function handleSubmit(e) {
    e.preventDefault();
  }

  const randomPrices = useMemo(() => {
    const prices = [];
    for (let i = 0; i < cars.length; i++) {
      prices.push(Randomizer({ base_num: 40000, range: 100000 }));
    }
    return prices;
  }, [cars]); // Recalculate prices whenever cars change

  const [changer, setChanger] = useState("Default (Sort by)")

  return (
    <div>
      <Authenticatednavjs />
      <div className="flexbox">
        <Search />
        <div>
          <Dropdown
            items={sortMenuItems}
            dropdown="dropdown-content"
            buttonClass="dropbtn"
            buttonTrigger={changer}
            changer={setChanger}
          />
          <Filter
            dropdown="dropdown-content"
            buttonClass="dropbtn"
            buttonTrigger="Default (Filter by)"
            handleChange={handleFilterChange}
            handleSubmit={handleSubmit}
            filter = {filter}
          />
        </div>
      </div>

      <div className="buy-page">
        {/* Filters out cars with missing values */}
        {cars.filter(car =>
          car.manufacturer_name != null &&
          car.model != null &&
          car.model_year != null &&
          car.photo_url !== "" &&
          car.electric_range !== "" &&
          car.fuel_name != null &&
          car.drivetrain != null &&
          car.seating_capacity !== ""
        ).map((car, index) => {
          if (randomPrices[index] <= filter.max && randomPrices[index] >= filter.min) {
            return(
              <div key={car.id} className="car-item">
                <img src={car.photo_url} alt={`${car.manufacturer_name} ${car.model}`} />
                <p>{car.manufacturer_name} {car.model}</p>
                <p>Year: {car.model_year}</p>
                <p>Electric Range: {car.electric_range} miles</p>
                <p>Fuel Type: {car.fuel_name}</p>
                <p>Drivetrain: {car.drivetrain}</p>
                <p>Seating Capacity: {car.seating_capacity}</p>
                <p>Price: ${randomPrices[index]}</p>
              </div>
            );
          } else {
            return null
          }
          
        })}
      </div>
    </div>
  );
};

export default Buy;