import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Luxury Apartment', price: '$1,200,000' },
    { id: 2, title: 'Cozy Cottage', price: '$300,000' },
    { id: 3, title: 'Modern Villa', price: '$2,500,000' },
  ];

  return (
    <div>
      <h2>Property Listings</h2>
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