import React from 'react';

const listings = [
  { id: 1, title: 'Modern Family Home', price: '$350,000', description: 'A spacious family home with a large backyard.' },
  { id: 2, title: 'Luxury Condo', price: '$750,000', description: 'A beautiful condo with ocean views.' },
  { id: 3, title: 'Cozy Cottage', price: '$220,000', description: 'A quaint cottage perfect for a weekend getaway.' }
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
            <p>{listing.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;
