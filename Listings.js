import React from 'react';
import './Listings.css';

const listings = [
  { id: 1, title: 'Beautiful Family House', price: '$300,000' },
  { id: 2, title: 'Modern Apartment', price: '$250,000' },
  { id: 3, title: 'Luxury Villa', price: '$1,200,000' }
];

function Listings() {
  return (
    <div className="listings">
      <h2>Property Listings</h2>
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