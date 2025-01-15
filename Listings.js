import React from 'react';

const listings = [
  {
    id: 1,
    title: 'Luxury Apartment',
    price: '$500,000',
    description: 'A beautiful luxury apartment in the heart of the city.',
  },
  {
    id: 2,
    title: 'Cozy Cottage',
    price: '$250,000',
    description: 'A cozy cottage perfect for weekend getaways.',
  },
  {
    id: 3,
    title: 'Modern House',
    price: '$750,000',
    description: 'A modern house with all the latest amenities.',
  },
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
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
