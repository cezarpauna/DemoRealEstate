import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Luxury Villa', location: 'Miami', price: '$2,000,000' },
    { id: 2, title: 'Modern Apartment', location: 'New York', price: '$1,200,000' },
    { id: 3, title: 'Cozy Cottage', location: 'Lake Tahoe', price: '$850,000' }
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h3>{property.title}</h3>
            <p>Location: {property.location}</p>
            <p>Price: {property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
