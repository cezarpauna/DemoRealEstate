import React from 'react';

const listings = [
  { id: 1, title: 'Apartment in City Center', price: 120000 },
  { id: 2, title: 'Cozy Cottage', price: 250000 },
  { id: 3, title: 'Luxury Villa', price: 750000 }
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            {listing.title} - ${listing.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;
