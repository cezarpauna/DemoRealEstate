import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Modern Apartment', price: '$250,000', location: 'New York, NY' },
    { id: 2, title: 'Cozy Cottage', price: '$150,000', location: 'Austin, TX' },
    { id: 3, title: 'Luxury Villa', price: '$1,200,000', location: 'Miami, FL' },
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h3>{property.title}</h3>
            <p>{property.location} - {property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;