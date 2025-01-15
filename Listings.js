import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Luxury Villa', price: '$1,200,000', location: 'California' },
    { id: 2, title: 'Modern Apartment', price: '$800,000', location: 'New York' },
    { id: 3, title: 'Cozy Cottage', price: '$350,000', location: 'Michigan' } 
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h3>{property.title}</h3>
            <p>Price: {property.price}</p>
            <p>Location: {property.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
