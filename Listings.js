import React from 'react';

const listings = [
  { id: 1, title: 'Luxury Beach House', price: '$1,500,000' },
  { id: 2, title: 'Modern City Apartment', price: '$750,000' },
  { id: 3, title: 'Rustic Country Cottage', price: '$300,000' }
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