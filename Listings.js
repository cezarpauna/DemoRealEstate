import React from 'react';

function Listings() {
  const properties = [
    { id: 1, title: 'Luxury Apartment', price: '$1,200/month' },
    { id: 2, title: 'Cozy Cottage', price: '$800/month' },
    { id: 3, title: 'Modern House', price: '$2,000/month' },
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>{property.title} - {property.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;
