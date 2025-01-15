import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Modern Apartment', price: '$300,000', description: 'A beautiful modern apartment in the city center.' },
    { id: 2, title: 'Cozy Cottage', price: '$150,000', description: 'A charming cottage in a quiet neighborhood.' },
    { id: 3, title: 'Luxury Villa', price: '$1,200,000', description: 'A luxurious villa with a stunning view.' }
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
