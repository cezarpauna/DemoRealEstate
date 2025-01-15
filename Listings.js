import React from 'react';

const Listings = () => {
  const properties = [
    { id: 1, title: 'Luxury Apartment', price: '$250,000', location: 'New York' },
    { id: 2, title: 'Cozy Cottage', price: '$150,000', location: 'Lake Tahoe' },
    { id: 3, title: 'Modern Villa', price: '$500,000', location: 'Los Angeles' }
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}> 
            <h3>{property.title}</h3>
            <p>Price: {property.price}</p>
            <p>Location: {property.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;