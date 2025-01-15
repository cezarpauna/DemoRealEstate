import React from 'react';

const listings = [
  { id: 1, title: 'Lovely Apartment', price: '$1200/month' },
  { id: 2, title: 'Modern House', price: '$2500/month' },
  { id: 3, title: 'Cozy Studio', price: '$800/month' }
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>{listing.title} - {listing.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;