import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Beautiful Family House', price: '$350,000', description: 'A wonderful family home with 4 bedrooms and a large garden.' },
    { id: 2, title: 'Modern Apartment', price: '$250,000', description: 'A stylish apartment in the city center.' },
    { id: 3, title: 'Cozy Cottage', price: '$200,000', description: 'A charming cottage with a stunning view.' }
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h3>{property.title}</h3>
            <p>Price: {property.price}</p>
            <p>{property.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
