import React from 'react';

const listings = [
  { id: 1, title: 'Beautiful Apartment', price: '$300,000' },
  { id: 2, title: 'Luxury Villa', price: '$1,200,000' },
  { id: 3, title: 'Cozy Cottage', price: '$250,000' },
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
