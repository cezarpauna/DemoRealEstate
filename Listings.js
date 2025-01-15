import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, name: 'Charming Cottage', price: '$300,000', location: 'New York' },
    { id: 2, name: 'Modern Apartment', price: '$600,000', location: 'San Francisco' },
    { id: 3, name: 'Spacious Villa', price: '$1,200,000', location: 'Miami' }
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            {property.name} - {property.price} - {property.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
