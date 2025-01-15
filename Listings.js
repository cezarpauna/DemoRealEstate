import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, name: 'Luxury Villa', price: '$1,200,000', location: 'California' },
    { id: 2, name: 'Cozy Apartment', price: '$600,000', location: 'New York' },
    { id: 3, name: 'Modern House', price: '$950,000', location: 'Texas' },
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            {property.name} - {property.price} ({property.location})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
