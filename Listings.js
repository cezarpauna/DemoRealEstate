import React from 'react';
import './Listings.css';

const listings = [
  { id: 1, title: 'Luxury Apartment', price: '$1,200,000', location: 'New York' },
  { id: 2, title: 'Cozy Cottage', price: '$300,000', location: 'Pennsylvania' },
  { id: 3, title: 'Modern Villa', price: '$850,000', location: 'California' },
];

function Listings() {
  return (
    <div className="Listings">
      <h2>Real Estate Listings</h2>
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
