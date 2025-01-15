import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, name: 'Beautiful Family House', price: '$500,000' },
    { id: 2, name: 'Modern Apartment', price: '$300,000' },
    { id: 3, name: 'Luxury Villa', price: '$1,200,000' }
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>{property.name} - {property.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;