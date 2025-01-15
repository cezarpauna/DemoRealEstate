import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Luxury Villa', price: '$1,200,000', description: 'A beautiful luxury villa.' },
    { id: 2, title: 'City Apartment', price: '$800,000', description: 'A modern apartment in the city.' },
    { id: 3, title: 'Countryside House', price: '$500,000', description: 'A cozy house in the countryside.' }
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h3>{property.title}</h3>
            <p>Price: {property.price}</p>
            <p>{property.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;