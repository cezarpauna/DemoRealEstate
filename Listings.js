import React from 'react';
import './Listings.css';

function Listings() {
  const properties = [
    { id: 1, name: 'Luxury Villa', price: '$1,200,000' },
    { id: 2, name: 'Cozy Apartment', price: '$300,000' },
    { id: 3, name: 'Modern Townhouse', price: '$650,000' }
  ];

  return (
    <div className="listings">
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h3>{property.name}</h3>
            <p>Price: {property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;
