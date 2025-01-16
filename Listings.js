import React from 'react';

const listings = [
  { id: 1, title: 'Luxury Villa', price: '$1,200,000', location: 'Malibu' },
  { id: 2, title: 'Cozy Cottage', price: '$500,000', location: 'Lake Tahoe' },
  { id: 3, title: 'Modern Apartment', price: '$750,000', location: 'New York' },
];

const Listings = () => {
  return (
    <div>
      <h2>Property Listings</h2>
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
};

export default Listings;
