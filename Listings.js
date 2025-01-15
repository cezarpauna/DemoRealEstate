import React from 'react';

const listings = [
  { id: 1, title: 'Beautiful House', price: '$500,000', location: 'New York' },
  { id: 2, title: 'Modern Apartment', price: '$300,000', location: 'Los Angeles' },
  { id: 3, title: 'Spacious Villa', price: '$1,200,000', location: 'Miami' }
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>{listing.title} - {listing.price} in {listing.location}</li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;