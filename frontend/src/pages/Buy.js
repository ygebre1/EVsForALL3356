import React, { useState, useEffect, useMemo} from 'react';
import '../styles/Buy.css';
import Menubar from '../sections/Menubar.js';
import Search from '../sections/LocationSearchBar.js'
import '../styles/Car.css';
import Dropdown from '../sections/SortMenu.js';
import Filter from '../sections/FilterMenu.js';
import Randomizer from '../functions/Randomizer.js';
import Car from './Car';

const Buy = () => {

  //------

  // State to store fetched cars
  const [cars, setCars] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 30;
  const [filterBrands, setFilterBrands] = useState([]);
  const [filter, setFilter] = useState({
    min: 0,
    max: 140000,
    low_range: 0,
    high_range: 500,
    year: undefined
  });
  const [brandNames, setBrandNames] = useState([]);

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
        const response = await fetch(`http://localhost:8800/light-duty-automobiles?limit=${limit}&offset=${offset}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const newCars = await response.json();
        const filteredCars = newCars.filter(car => 
          car.manufacturer_name != null &&
          car.model != null &&
          car.model_year != null &&
          car.photo_url !== "" &&
          car.electric_range !== "" &&
          car.fuel_name != null &&
          car.drivetrain != null &&
          car.seating_capacity !== ""
        );
        getFilterBrands(filteredCars)
        if (filteredCars.length > 0) {
            setCars(prevCars => [...prevCars, ...filteredCars]); // Append new cars to existing list
            setOffset(prevOffset => prevOffset + limit); // Increase offset
            
        }
    } catch (error) {
        console.error('Error fetching cars:', error);
    }
  };

  const getFilterBrands = (data) => {
    if (data.length !== 0) {
      const brandSet = new Set(filterBrands);  // Create a set from the current state
      let changed = false;  // This flag will track whether we added new brands
      data.forEach(car => {
        if (car !== null && !brandSet.has(car.manufacturer_name)) {
          brandSet.add(car.manufacturer_name);
          changed = true;  // Set the flag to true as we've added a new brand
        }
      });
      if (changed) {
        setFilterBrands(Array.from(brandSet));
      }
    }
  }
  

  // useEffect to call fetchCars on component mount
  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCarsBrands = async () => {
    try {
        const response = await fetch(`http://localhost:8800/light-duty-automobiles?limit=${cars.length}&offset=${0}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const newCars = await response.json();
        const filteredCars = newCars.filter(car => 
          car.manufacturer_name != null &&
          car.model != null &&
          car.model_year != null &&
          car.photo_url !== "" &&
          car.electric_range !== "" &&
          car.fuel_name != null &&
          car.drivetrain != null &&
          car.seating_capacity !== ""
        );
        if (filteredCars.length > 0) {
            setCars(filteredCars);
        }
    } catch (error) {
        console.error('Error fetching cars:', error);
    }
  };

  useEffect(() => {
    fetchCarsBrands()
    console.log(brandNames)
  }, [brandNames])

  useEffect(() => {
    console.log(cars.length)
  }, [cars.length])

  const loadMoreCars = () => {
    fetchCars(); // Fetch more cars on button click
  };

  const sortMenuItems = [
    { title: 'Default (Sort by)' },
    { title: 'Price (lowest to highest)' },
    { title: 'Price (highest to lowest)' },
    { title: 'Alphabetically (A-Z)' }
  ];

  // handles state chanes in filter
  function handleFilterChange(e) {
    const { name, value } = e.target;
    setFilter(prev => ({
      ...prev,
      [name]: value
    }));
  }

  // contains the brand names to be included for filtering

  const handleBrands = (brand) => {
    setBrandNames((alreadyIncluded) => {
      if (alreadyIncluded.includes(brand)) {
          return alreadyIncluded.filter(name => name !== brand);
      } else {
          return [...alreadyIncluded, brand];
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  const randomPrices = useMemo(() => {
    const prices = [];
    for (let i = 0; i < cars.length; i++) {
      prices.push(Randomizer({ base_num: 20000, range: 60000 }));
    }
    return prices;
  }, [cars]); // Recalculate prices whenever cars change

  const [changer, setChanger] = useState("Default (Sort by)")

  return (
    <div>
      <Menubar />
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
            brands={filterBrands}
            handleChange={handleFilterChange}
            handleSubmit={handleSubmit}
            handleBrands={handleBrands}
            filter = {filter}
          />
        </div>
      </div>

      <div className="buy-page">
        {cars.map((car, index) => {
            if (randomPrices[index] <= filter.max && randomPrices[index] >= filter.min) {
                if (car.electric_range >= filter.low_range && car.electric_range <= filter.high_range) {
                  if (brandNames.length === 0 || brandNames.includes(car.manufacturer_name)) {
                    return <Car key={car.id} car={car} price={randomPrices[index]} />;
                  }
                }
            }
            return null;
        })}
        <button className="load-more-cars" onClick={loadMoreCars}>Load More Cars</button>
    </div>

      
    </div>
  );
};

export default Buy;
