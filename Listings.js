import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Beautiful Beach House', price: '$500,000' },
    { id: 2, title: 'Modern City Apartment', price: '$300,000' },
    { id: 3, title: 'Charming Country Cottage', price: '$250,000' }
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>{property.title} - {property.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
