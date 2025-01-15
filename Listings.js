import React from 'react';

const listings = [
  { id: 1, title: 'Luxury Villa', price: '$1,200,000', description: 'A beautiful villa with a sea view.' },
  { id: 2, title: 'Modern Apartment', price: '$750,000', description: 'A stylish apartment in the city center.' },
  { id: 3, title: 'Family Home', price: '$500,000', description: 'A spacious home perfect for families.' },
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