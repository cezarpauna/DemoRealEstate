import React from 'react';

const listings = [
  { id: 1, title: 'Beautiful Family Home', location: 'New York', price: '$1,200,000' },
  { id: 2, title: 'Luxury Apartment', location: 'San Francisco', price: '$2,500,000' },
  { id: 3, title: 'Cozy Cottage', location: 'Austin', price: '$400,000' },
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            <h3>{listing.title}</h3>
            <p>Location: {listing.location}</p>
            <p>Price: {listing.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;
