import React from 'react';

const listings = [
  { id: 1, title: 'Modern Apartment', price: '$300,000', description: 'A beautiful modern apartment in the city center.' },
  { id: 2, title: 'Cozy Cottage', price: '$250,000', description: 'A quaint cottage in a quiet neighborhood.' },
  { id: 3, title: 'Luxury Villa', price: '$1,200,000', description: 'A stunning villa with a sea view.' }
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