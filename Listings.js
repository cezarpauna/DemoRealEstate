import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Luxury Villa', price: '$1,200,000', description: 'A beautiful luxury villa with a pool.' },
    { id: 2, title: 'Cozy Cottage', price: '$350,000', description: 'A cozy cottage in the countryside.' },
    { id: 3, title: 'Downtown Apartment', price: '$500,000', description: 'An apartment in the heart of the city.' },
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>{property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
