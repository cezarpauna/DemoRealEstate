import React from 'react';

function Listings() {
  const properties = [
    { id: 1, title: 'Beautiful Beach House', price: '$1,200,000' },
    { id: 2, title: 'Charming Country Cottage', price: '$750,000' },
    { id: 3, title: 'Modern City Apartment', price: '$1,000,000' }
  ];

  return (
    <div className="Listings">
      <h2>Available Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h3>{property.title}</h3>
            <p>Price: {property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;