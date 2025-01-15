import React from 'react';

const listings = [
  { id: 1, title: 'Luxury Apartment', price: '$1,200,000', description: 'A beautiful luxury apartment in the city center.' },
  { id: 2, title: 'Family House', price: '$800,000', description: 'A spacious family house with a large backyard.' },
  { id: 3, title: 'Modern Condo', price: '$500,000', description: 'A modern condo with stunning views.' }
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map((listing) => (
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
