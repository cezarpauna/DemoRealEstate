import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Luxury Villa', price: '$1,500,000' },
    { id: 2, title: 'Beach House', price: '$900,000' },
    { id: 3, title: 'Downtown Apartment', price: '$300,000' },
  ];

  return (
    <div>
      <h2>Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            {property.title} - {property.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;