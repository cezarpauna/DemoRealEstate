import React from 'react';
import './Listings.css';

const listings = [
  { id: 1, title: 'Luxury Apartment', price: '$1,200,000' },
  { id: 2, title: 'Cozy Cottage', price: '$500,000' },
  { id: 3, title: 'Modern Villa', price: '$2,000,000' },
];

function Listings() {
  return (
    <div className="listings">
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