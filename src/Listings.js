import React from 'react';

const listings = [
  { id: 1, title: 'Beautiful Family House', price: '$500,000', description: 'A spacious family house with a big garden.' },
  { id: 2, title: 'Modern Apartment', price: '$300,000', description: 'A modern apartment in the city center.' },
  { id: 3, title: 'Luxury Villa', price: '$1,200,000', description: 'A luxury villa with a sea view.' },
];

function Listings() {
  return (
    <div>
      <h2>Real Estate Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id} style={{margin: '20px', listStyleType: 'none'}}>
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
