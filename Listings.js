import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, name: 'Luxury Villa in California', price: '$2,000,000' },
    { id: 2, name: 'Modern Apartment in New York', price: '$1,200,000' },
    { id: 3, name: 'Beach House in Miami', price: '$1,500,000' },
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            {property.name} - {property.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
