import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, name: 'Luxury Apartment', price: '$1,200/month' },
    { id: 2, name: 'Cozy Cottage', price: '$800/month' },
    { id: 3, name: 'Modern House', price: '$1,500/month' }
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