import React from 'react';

const listings = [
  { id: 1, title: 'Luxury Apartment', price: '$1,200,000', description: 'A beautiful luxury apartment in downtown.' },
  { id: 2, title: 'Cozy Cottage', price: '$350,000', description: 'A cozy cottage in the countryside.' },
  { id: 3, title: 'Modern Condo', price: '$750,000', description: 'A modern condo with all amenities.' }
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
            <p>Price: {listing.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;