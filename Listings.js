import React from 'react';
import './Listings.css';

const listings = [
  { id: 1, title: 'Cozy Cottage', price: '$200,000', description: 'A cozy cottage in the countryside.' },
  { id: 2, title: 'Modern Apartment', price: '$350,000', description: 'A modern apartment in the city.' },
  { id: 3, title: 'Luxury Villa', price: '$1,200,000', description: 'A luxury villa with a sea view.' }
];

function Listings() {
  return (
    <div className='Listings'>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            <h3>{listing.title}</h3>
            <p>Price: {listing.price}</p>
            <p>{listing.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;
