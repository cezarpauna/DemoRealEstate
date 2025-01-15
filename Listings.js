import React from 'react';

const listings = [
  { id: 1, title: 'Ocean View Apartment', price: '$2,000/month' },
  { id: 2, title: 'Downtown Studio', price: '$1,500/month' },
  { id: 3, title: 'Luxury Villa', price: '$5,000/month' },
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}> {listing.title} - {listing.price} </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;
