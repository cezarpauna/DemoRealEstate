import React from 'react';

const listings = [
  { id: 1, title: 'Luxury Apartment in Downtown', price: '$300,000' },
  { id: 2, title: 'Cozy Cottage in the Countryside', price: '$150,000' },
  { id: 3, title: 'Modern Family Home', price: '$250,000' }
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map((listing) => (
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
