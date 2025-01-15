import React from 'react';
import './Listings.css';

const listings = [
  { id: 1, title: 'Modern Apartment', price: '$300,000', description: 'A beautiful modern apartment in the city center.' },
  { id: 2, title: 'Cozy Cottage', price: '$200,000', description: 'A quaint cottage in the countryside.' },
  { id: 3, title: 'Luxury Villa', price: '$1,000,000', description: 'A stunning luxury villa with a sea view.' }
];

function Listings() {
  return (
    <div className='listings'>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
            <p>{listing.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;
