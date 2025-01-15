import React from 'react';
import './Listings.css';

const listings = [
  { id: 1, title: 'Charming Cottage', price: '$300,000' },
  { id: 2, title: 'Luxury Apartment', price: '$800,000' },
  { id: 3, title: 'Modern House', price: '$450,000' },
];

function Listings() {
  return (
    <div className="listings">
      <h2>Available Listings</h2>
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