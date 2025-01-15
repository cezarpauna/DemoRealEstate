import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, name: '3 Bedroom Apartment', price: '$300,000' },
    { id: 2, name: '4 Bedroom House', price: '$400,000' },
    { id: 3, name: '2 Bedroom Condo', price: '$250,000' },
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
