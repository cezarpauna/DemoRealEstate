import React from 'react';

const listings = [
  { id: 1, title: 'Luxury Villa in LA', price: '$1,200,000', description: 'A beautiful villa with ocean view.' },
  { id: 2, title: 'Modern Apartment in NYC', price: '$900,000', description: 'A cozy apartment in the heart of the city.' },
  { id: 3, title: 'Country House in Texas', price: '$600,000', description: 'A spacious house with a large garden.' }
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
            <p>{listing.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;