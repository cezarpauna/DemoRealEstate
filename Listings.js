import React from 'react';

const Listings = () => {
  const listings = [
    { id: 1, title: 'Luxury Apartment', price: '$500,000' },
    { id: 2, title: 'Beach House', price: '$750,000' },
    { id: 3, title: 'City Loft', price: '$300,000' }
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>{listing.title} - {listing.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;