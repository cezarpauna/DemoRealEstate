import React from 'react';

const listings = [
  { id: 1, title: 'Beautiful Apartment in City Center', price: 250000 },
  { id: 2, title: 'Charming House near Park', price: 350000 },
  { id: 3, title: 'Modern Studio in Downtown', price: 200000 }
];

const Listings = () => {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>{listing.title} - ${listing.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;