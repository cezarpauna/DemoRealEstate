import React from 'react';

const listings = [
  { id: 1, title: 'Luxury Villa', price: '$1,200,000', location: 'California' },
  { id: 2, title: 'Modern Apartment', price: '$600,000', location: 'New York' },
  { id: 3, title: 'Cozy Cottage', price: '$300,000', location: 'Texas' }
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            <h3>{listing.title}</h3>
            <p>{listing.price} - {listing.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;