import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, name: 'Charming Cottage', price: '$250,000', description: 'A beautiful cottage in the countryside.' },
    { id: 2, name: 'Modern Apartment', price: '$300,000', description: 'A stylish apartment in the city.' },
    { id: 3, name: 'Luxury Villa', price: '$1,200,000', description: 'A luxurious villa with a sea view.' }
  ];

  return (
    <div>
      <h2>Available Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h3>{property.name}</h3>
            <p>{property.description}</p>
            <p>{property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
