import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Luxury Apartment', price: '$2000/month' },
    { id: 2, title: 'Cozy Cottage', price: '$1500/month' },
    { id: 3, title: 'Modern Villa', price: '$3000/month' }
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
