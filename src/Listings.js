import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Beautiful Family Home', price: '$500,000' },
    { id: 2, title: 'Luxurious Condo', price: '$750,000' },
    { id: 3, title: 'Cozy Cabin', price: '$300,000' },
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h3>{property.title}</h3>
            <p>{property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;