import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: '3 Bedroom House', price: '$300,000', description: 'A beautiful family home.' },
    { id: 2, title: 'Luxury Apartment', price: '$1,200,000', description: 'Modern living in the heart of the city.' },
    { id: 3, title: 'Cozy Cottage', price: '$150,000', description: 'Perfect for weekends away.' }
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>{property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
