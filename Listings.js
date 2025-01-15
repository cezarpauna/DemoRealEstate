import React from 'react';
import './Listings.css';

const listings = [
  { id: 1, title: 'Luxury Villa', price: '$1,200,000', description: 'A beautiful luxury villa with a pool.' },
  { id: 2, title: 'Modern Apartment', price: '$800,000', description: 'A modern apartment in the city center.' },
  { id: 3, title: 'Cozy Cottage', price: '$300,000', description: 'A cozy cottage in the countryside.' }
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
            <p>{listing.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;
