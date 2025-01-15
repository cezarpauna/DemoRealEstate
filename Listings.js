import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, location: 'New York', price: '$1,000,000' },
    { id: 2, location: 'Los Angeles', price: '$850,000' },
    { id: 3, location: 'Chicago', price: '$620,000' }
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>{property.location}: {property.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
