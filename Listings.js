import React from 'react';

const listings = [
  { id: 1, title: 'Luxury Apartment', price: '$1200/month' },
  { id: 2, title: 'Modern House', price: '$250,000' },
  { id: 3, title: 'Cozy Cottage', price: '$150,000' },
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}> {listing.title} - {listing.price} </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;