import React from 'react';

const listings = [
  { id: 1, title: 'Luxurious Villa', price: '$1,200,000', description: 'A beautiful villa with ocean views.', image: 'villa.jpg' },
  { id: 2, title: 'Urban Apartment', price: '$500,000', description: 'A modern apartment in the city center.', image: 'apartment.jpg' }
];

function Listings() {
  return (
    <div>
      <h2>Property Listings</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {listings.map(listing => (
          <div key={listing.id} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h3>{listing.title}</h3>
            <p>{listing.price}</p>
            <p>{listing.description}</p>
            <img src={listing.image} alt={listing.title} style={{ width: '100px' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listings;