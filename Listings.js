import React from 'react';

const listings = [
  { id: 1, title: 'Beautiful Family Home', price: '$300,000' },
  { id: 2, title: 'Luxurious Apartment', price: '$500,000' },
  { id: 3, title: 'Cozy Studio', price: '$150,000' }
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            {listing.title} - {listing.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;