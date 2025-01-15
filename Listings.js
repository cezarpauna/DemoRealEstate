import React from 'react';

const listings = [
  { id: 1, title: 'Cozy Cottage', price: '$200,000', description: 'A cozy cottage near the lake.' },
  { id: 2, title: 'Modern Apartment', price: '$350,000', description: 'A modern apartment in the city center.' },
  { id: 3, title: 'Family Home', price: '$450,000', description: 'A spacious family home with a backyard.' }
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