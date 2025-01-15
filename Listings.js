import React from 'react';

function Listings() {
  const properties = [
    { id: 1, title: 'Beautiful Family House', price: '$300,000' },
    { id: 2, title: 'Modern Apartment', price: '$250,000' },
    { id: 3, title: 'Luxury Villa', price: '$1,200,000' }
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
}

export default Listings;