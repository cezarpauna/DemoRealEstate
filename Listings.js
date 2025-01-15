import React from 'react';

const Listings = () => {
  const listingData = [
    { id: 1, title: 'Beautiful Family House', price: '$300,000', image: 'house1.jpg' },
    { id: 2, title: 'Modern Apartment', price: '$250,000', image: 'apartment1.jpg' },
    { id: 3, title: 'Luxury Villa', price: '$1,000,000', image: 'villa1.jpg' }
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {listingData.map(listing => (
          <li key={listing.id}>
            <h3>{listing.title}</h3>
            <p>{listing.price}</p>
            <img src={listing.image} alt={listing.title} width="200" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;