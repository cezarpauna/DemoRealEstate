import React from 'react';

function Listings() {
  const properties = [
    { id: 1, title: 'Luxury Villa', price: '$1,200,000', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Cozy Cottage', price: '$350,000', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Modern Apartment', price: '$750,000', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <img src={property.image} alt={property.title} />
            <h3>{property.title}</h3>
            <p>{property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;