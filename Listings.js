import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Beautiful House', price: '$500,000', description: 'A beautiful 3-bedroom house in the suburbs.' },
    { id: 2, title: 'Modern Apartment', price: '$300,000', description: 'A modern 2-bedroom apartment in the city center.' },
    { id: 3, title: 'Cozy Cottage', price: '$250,000', description: 'A cozy cottage with a fireplace and a beautiful garden.' },
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p><strong>{property.price}</strong></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;