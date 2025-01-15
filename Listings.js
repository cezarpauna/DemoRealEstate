import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Cozy Cottage', price: '$350,000' },
    { id: 2, title: 'Modern Apartment', price: '$550,000' },
    { id: 3, title: 'Luxurious Villa', price: '$1,200,000' },
  ];

  return (
    <div>
      <h2>Available Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>{property.title} - {property.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
