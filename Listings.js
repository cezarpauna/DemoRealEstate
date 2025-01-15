import React from 'react';

const listings = [
  { id: 1, title: 'Beautiful Apartment', price: '$300,000', description: 'Located in the heart of the city.' },
  { id: 2, title: 'Luxury Villa', price: '$1,200,000', description: 'A spacious villa with a swimming pool.' },
  { id: 3, title: 'Modern Studio', price: '$200,000', description: 'Perfect for singles or couples.' }
];

const Listings = () => {
  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
            <p><strong>{listing.price}</strong></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
