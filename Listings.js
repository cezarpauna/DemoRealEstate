import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Luxury Apartment', price: '$500,000', description: '3 beds, 2 baths' },
    { id: 2, title: 'Beach House', price: '$750,000', description: '4 beds, 3 baths' },
    { id: 3, title: 'Downtown Condo', price: '$350,000', description: '2 beds, 1 bath' }
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h3>{property.title}</h3>
            <p>{property.price}</p>
            <p>{property.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;