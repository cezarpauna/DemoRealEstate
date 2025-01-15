import React from 'react';

const listings = [
  { id: 1, title: 'Cozy Cottage', location: 'Lake Tahoe', price: '$350,000' },
  { id: 2, title: 'Luxury Apartment', location: 'New York', price: '$1,200,000' },
  { id: 3, title: 'Beach House', location: 'Santa Monica', price: '$850,000' },
];

const Listings = () => {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            <h3>{listing.title}</h3>
            <p>Location: {listing.location}</p>
            <p>Price: {listing.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
