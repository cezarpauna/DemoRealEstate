import React from 'react';

const listings = [
  { id: 1, title: 'Luxury Apartment', price: '$1,200,000' },
  { id: 2, title: 'Beach House', price: '$1,500,000' },
  { id: 3, title: 'Cozy Cottage', price: '$450,000' },
];

function Listings() {
  return (
    <div>
      <h2>Available Listings</h2>
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