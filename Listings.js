import React from 'react';

const listings = [
  { id: 1, title: '3 Bedroom Apartment', price: '$300,000' },
  { id: 2, title: '2 Bedroom House', price: '$250,000' },
  { id: 3, title: '1 Bedroom Condo', price: '$200,000' },
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