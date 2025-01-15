import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, name: 'Luxury Villa', price: '$1,200,000', location: 'California' },
    { id: 2, name: 'Modern Apartment', price: '$800,000', location: 'New York' },
    { id: 3, name: 'Cozy Cottage', price: '$600,000', location: 'Oregon' },
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h3>{property.name}</h3>
            <p>{property.location}</p>
            <p>{property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;