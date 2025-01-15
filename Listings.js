import React from 'react';

const listings = [
  { id: 1, title: 'Luxury Apartment in City Center', price: '$500,000' },
  { id: 2, title: 'Cozy Cottage in the Countryside', price: '$250,000' },
  { id: 3, title: 'Modern House with Pool', price: '$750,000' }
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
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