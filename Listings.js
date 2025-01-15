import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Beautiful Family Home', price: 300000},
    { id: 2, title: 'Modern Apartment', price: 200000},
    { id: 3, title: 'Charming Cottage', price: 150000}
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>{property.title} - ${property.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
