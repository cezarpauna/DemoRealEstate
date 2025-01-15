import React from 'react';

const listings = [
  { id: 1, title: 'Luxury Villa', price: '$1,200,000' },
  { id: 2, title: 'Modern Apartment', price: '$800,000' },
  { id: 3, title: 'Beachfront Property', price: '$2,500,000' }
];

const Listings = () => {
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
};

export default Listings;
