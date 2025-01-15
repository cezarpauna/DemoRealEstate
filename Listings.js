import React from 'react';
import './Listings.css';

const listings = [
  { id: 1, title: 'Luxury Apartment', price: '$1,200/month' },
  { id: 2, title: 'Cozy Cottage', price: '$850/month' },
  { id: 3, title: 'Modern Loft', price: '$1,500/month' },
];

function Listings() {
  return (
    <div className="Listings">
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            <h3>{listing.title}</h3>
            <p>{listing.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;
