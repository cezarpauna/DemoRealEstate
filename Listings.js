import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Beautiful Family Home', price: '$300,000' },
    { id: 2, title: 'Modern Apartment', price: '$250,000' },
    { id: 3, title: 'Luxury Villa', price: '$1,200,000' }
  ];

  return (
    <div>
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