import React from 'react';

const listings = [
  { id: 1, title: 'Modern Apartment', price: '$300,000', description: 'A spacious modern apartment located in the heart of the city.' },
  { id: 2, title: 'Cozy Cottage', price: '$150,000', description: 'A quaint cottage in a quiet neighborhood.' },
  { id: 3, title: 'Luxury Villa', price: '$1,000,000', description: 'A luxurious villa with ocean views and a private pool.' }
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map((listing) => (
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
