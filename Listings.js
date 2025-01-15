import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: '3 Bedroom House', price: '$300,000' },
    { id: 2, title: '2 Bedroom Apartment', price: '$200,000' },
    { id: 3, title: '4 Bedroom Villa', price: '$500,000' },
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>{property.title} - {property.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
