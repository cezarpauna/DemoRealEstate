import React from 'react';

function Listings() {
  const properties = [
    { id: 1, title: 'Cozy Cottage', price: '$200,000', description: 'A beautiful cottage in the woods.' },
    { id: 2, title: 'Modern Apartment', price: '$300,000', description: 'A spacious apartment in the city center.' },
    { id: 3, title: 'Luxury Villa', price: '$1,000,000', description: 'A luxurious villa with a sea view.' },
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
}

export default Listings;
