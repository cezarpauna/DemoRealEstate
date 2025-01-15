import React from 'react';

const listings = [
  { id: 1, name: 'Cozy Cottage', price: '$250,000', location: 'Lakeview' },
  { id: 2, name: 'Modern Apartment', price: '$400,000', location: 'Downtown' },
  { id: 3, name: 'Spacious Villa', price: '$850,000', location: 'Hillside' },
];

const Listings = () => {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            <h3>{listing.name}</h3>
            <p>Price: {listing.price}</p>
            <p>Location: {listing.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;