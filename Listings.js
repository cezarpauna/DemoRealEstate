import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, name: 'Luxury Apartment', price: '$500,000', location: 'New York' },
    { id: 2, name: 'Modern House', price: '$750,000', location: 'Los Angeles' },
    { id: 3, name: 'Cozy Cottage', price: '$300,000', location: 'Austin' },
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h3>{property.name}</h3>
            <p>{property.price} - {property.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
