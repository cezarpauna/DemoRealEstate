import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Luxury Apartment', price: '$1,200/month' },
    { id: 2, title: 'Cozy Cottage', price: '$800/month' },
    { id: 3, title: 'Modern Condo', price: '$1,500/month' },
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <h3>{property.title}</h3>
            <p>{property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
