import React from 'react';

const Listings = () => {
  const properties = [
    {id: 1, title: 'Luxury Villa', price: '$1,200,000', description: 'A beautiful luxury villa with ocean views.'},
    {id: 2, title: 'Cozy Cottage', price: '$350,000', description: 'A quaint cottage in the countryside.'},
    {id: 3, title: 'Modern Apartment', price: '$500,000', description: 'A stylish apartment in the city center.'}
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