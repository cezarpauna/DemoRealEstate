import React from 'react';

const listings = [
  { id: 1, title: 'Charming Cottage', price: '$250,000', description: 'A lovely cottage in the countryside.' },
  { id: 2, title: 'City Apartment', price: '$300,000', description: 'Modern apartment in the city center.' },
  { id: 3, title: 'Suburban Home', price: '$450,000', description: 'Spacious home with a large backyard.' }
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            <h3>{listing.title}</h3>
            <p>Price: {listing.price}</p>
            <p>{listing.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;
