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
