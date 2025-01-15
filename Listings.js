import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Modern Apartment', price: '$350,000', description: 'A beautiful modern apartment in the city center.' },
    { id: 2, title: 'Cozy Cottage', price: '$210,000', description: 'A cozy cottage in the countryside.' },
    { id: 3, title: 'Luxury Villa', price: '$1,200,000', description: 'A luxurious villa with a sea view.' },
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>Price: {property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;