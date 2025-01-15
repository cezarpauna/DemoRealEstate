import React from 'react';

const listings = [
  { id: 1, title: 'Beautiful Apartment', price: '$300,000', description: 'A beautiful apartment located downtown.' },
  { id: 2, title: 'Modern House', price: '$650,000', description: 'A modern house with all the amenities.' },
  { id: 3, title: 'Cozy Cottage', price: '$250,000', description: 'A cozy cottage in the countryside.' }
];

const Listings = () => {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
            <p><strong>{listing.price}</strong></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
