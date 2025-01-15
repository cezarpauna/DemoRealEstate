import React from 'react';

const listings = [
  { id: 1, title: 'Beautiful Family House', price: '$400,000', description: 'A beautiful family house located in the suburbs.' },
  { id: 2, title: 'Luxury Apartment', price: '$1,200,000', description: 'A luxury apartment in the city center.' },
  { id: 3, title: 'Cozy Cottage', price: '$250,000', description: 'A cozy cottage perfect for weekend getaways.' }
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
