import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Modern Apartment', price: '$1,200/month', location: 'Downtown' },
    { id: 2, title: 'Cozy Cottage', price: '$800/month', location: 'Suburbs' },
    { id: 3, title: 'Luxury Villa', price: '$3,000/month', location: 'Beachfront' },
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