import React from 'react';

const listings = [
  { id: 1, title: 'Luxury Apartment', price: '$1,200,000', description: 'A beautiful luxury apartment in the city center.' },
  { id: 2, title: 'Cozy Cottage', price: '$350,000', description: 'A cozy cottage perfect for families.' },
  { id: 3, title: 'Modern Office Space', price: '$2,500/month', description: 'A modern office space in a prime location.' },
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            <h3>{listing.title}</h3>
            <p>Price: {listing.price}</p>
            <p>{listing.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;