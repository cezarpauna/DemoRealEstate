import React from 'react';

const listings = [
  { id: 1, title: 'Beautiful Apartment', price: '$1,200/month', location: 'New York, NY' },
  { id: 2, title: 'Modern House', price: '$2,000/month', location: 'Los Angeles, CA' },
  { id: 3, title: 'Cozy Cottage', price: '$900/month', location: 'Portland, OR' }
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            <h3>{listing.title}</h3>
            <p>{listing.price} - {listing.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;