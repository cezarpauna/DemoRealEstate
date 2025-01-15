import React from 'react';

const Listings = () => {
  const listingData = [
    { title: 'Luxury Apartment', price: '$500,000' },
    { title: 'Cozy Cottage', price: '$250,000' },
    { title: 'Modern House', price: '$750,000' }
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listingData.map((listing, index) => (
          <li key={index}>{listing.title} - {listing.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;