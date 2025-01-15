import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Beautiful Family House', price: 300000 },
    { id: 2, title: 'Luxury Apartment', price: 500000 },
    { id: 3, title: 'Cozy Cottage', price: 150000 },
  ];

  return (
    <div>
      <h2>Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}> {property.title} - ${property.price} </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
