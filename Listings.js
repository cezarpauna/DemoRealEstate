import React from 'react';

const listings = [
  { id: 1, title: "Luxury Apartment", price: "$500,000", description: "A beautiful luxury apartment in the city center." },
  { id: 2, title: "Cozy Cottage", price: "$300,000", description: "A cozy cottage in the outskirts with a garden." },
  { id: 3, title: "Modern House", price: "$700,000", description: "A modern house with all the amenities and a pool." }
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
