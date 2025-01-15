import React from 'react';

const listings = [
  { id: 1, title: 'Beautiful Family Home', price: '$300,000', location: '123 Main St' },
  { id: 2, title: 'Modern Apartment', price: '$220,000', location: '456 Oak Ave' },
  { id: 3, title: 'Luxurious Villa', price: '$1,200,000', location: '789 Pine Rd' }
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
            <p>Location: {listing.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;
