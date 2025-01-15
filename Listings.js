import React from 'react';

const listings = [
  { id: 1, title: 'Luxury Villa in California', price: '$1,200,000' },
  { id: 2, title: 'Modern Apartment in New York', price: '$850,000' },
  { id: 3, title: 'Beach House in Florida', price: '$1,500,000' }
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>{listing.title} - {listing.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;