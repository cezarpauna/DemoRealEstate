import React from 'react';

const listings = [
  { id: 1, title: 'Cozy Cottage', price: '$200,000' },
  { id: 2, title: 'Modern Apartment', price: '$350,000' },
  { id: 3, title: 'Luxury Villa', price: '$1,200,000' }
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;