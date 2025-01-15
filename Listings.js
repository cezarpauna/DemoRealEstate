import React from 'react';

const Listings = () => {
  const listings = [
    { id: 1, title: 'Luxury Apartment', price: '$1,200,000' },
    { id: 2, title: 'Cozy Cottage', price: '$650,000' },
    { id: 3, title: 'Modern House', price: '$900,000' },
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            <h3>{listing.title}</h3>
            <p>{listing.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;