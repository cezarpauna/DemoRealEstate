import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Luxury Apartment', price: '$1,200/month' },
    { id: 2, title: 'Family House', price: '$300,000' },
    { id: 3, title: 'Cozy Cottage', price: '$150,000' }
  ];

  return (
    <div className="listings">
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h3>{property.title}</h3>
            <p>Price: {property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
