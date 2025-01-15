import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Ocean View Apartment', price: '$300,000' },
    { id: 2, title: 'Cozy Cabin in the Woods', price: '$200,000' },
    { id: 3, title: 'Modern City Condo', price: '$350,000' },
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
