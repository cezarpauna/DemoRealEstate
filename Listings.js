import React from 'react';

const listings = [
  { id: 1, title: 'Luxury Villa', description: 'A beautiful villa with a sea view', price: '$2,000,000' },
  { id: 2, title: 'Modern Apartment', description: 'An apartment in the city center', price: '$850,000' },
  { id: 3, title: 'Cozy Cottage', description: 'A quaint cottage in the countryside', price: '$500,000' }
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
            <p>Price: {listing.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;