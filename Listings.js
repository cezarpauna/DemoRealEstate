import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Luxury Villa in California', price: '$1,200,000' },
    { id: 2, title: 'Modern Apartment in New York', price: '$3,000/month' },
    { id: 3, title: 'Cozy Cottage in Vermont', price: '$450,000' }
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
