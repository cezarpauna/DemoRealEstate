import React from 'react';

const listings = [
  { id: 1, title: 'Cozy Apartment', price: 120000, location: 'New York' },
  { id: 2, title: 'Luxury Villa', price: 500000, location: 'California' },
  { id: 3, title: 'Modern Studio', price: 80000, location: 'Florida' },
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>
            {listing.title} - ${listing.price} ({listing.location})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;
