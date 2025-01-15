import React from 'react';
import './Listings.css';

const listingsData = [
  { id: 1, title: 'Lovely House', price: '$300,000' },
  { id: 2, title: 'Spacious Apartment', price: '$400,000' },
  { id: 3, title: 'Cozy Cottage', price: '$200,000' }
];

function Listings() {
  return (
    <div className="listings">
      <h2>Property Listings</h2>
      <ul>
        {listingsData.map(listing => (
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
