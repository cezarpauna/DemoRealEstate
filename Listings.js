import React from 'react';

const listings = [
  {
    id: 1,
    title: 'Luxury Apartment in City Center',
    price: '$300,000',
    description: 'A beautiful luxury apartment located in the heart of the city.',
  },
  {
    id: 2,
    title: 'Cozy Family House',
    price: '$250,000',
    description: 'A cozy family house in a quiet neighborhood.',
  },
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>
            <h3>{listing.title}</h3>
            <p>{listing.price}</p>
            <p>{listing.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;
