import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Luxury Apartment', price: '$1,200,000', description: 'A beautiful luxury apartment in the city center.' },
    { id: 2, title: 'Cozy Cottage', price: '$350,000', description: 'A cozy cottage in the countryside.' },
    { id: 3, title: 'Modern House', price: '$750,000', description: 'A modern house with all the amenities.' }
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>Price: {property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
