import React from 'react';

const listings = [
  { id: 1, title: 'Luxury Villa', price: '$1,200,000', description: 'A beautiful luxury villa with pool and ocean view.' },
  { id: 2, title: 'Modern Apartment', price: '$800,000', description: 'A modern apartment in the city center with great amenities.' },
  { id: 3, title: 'Cozy Cottage', price: '$400,000', description: 'A cozy cottage in the countryside, perfect for weekend getaways.' }
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
            <p>Price: {listing.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;
