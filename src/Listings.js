import React from 'react';
import './Listings.css';

const listings = [
  { id: 1, title: 'Cozy Cottage', price: '$250,000', location: 'Beverly Hills' },
  { id: 2, title: 'Modern Apartment', price: '$450,000', location: 'Downtown' },
  { id: 3, title: 'Spacious Family Home', price: '$300,000', location: 'Suburb' }
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
            <p>Location: {listing.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;