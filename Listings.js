import React from 'react';

const listings = [
  { id: 1, title: 'Modern Apartment', price: '$300,000', location: 'New York' },
  { id: 2, title: 'Beach House', price: '$750,000', location: 'California' },
  { id: 3, title: 'Country Cottage', price: '$250,000', location: 'Texas' },
];

function Listing() {
  return (
    <div>
      <h2>Available Listings</h2>
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

export default Listing;