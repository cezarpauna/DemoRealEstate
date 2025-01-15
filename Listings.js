import React from 'react';

const listings = [
    { id: 1, title: 'Cozy Cottage', price: '$200,000', location: 'California' },
    { id: 2, title: 'Modern Apartment', price: '$500,000', location: 'New York' },
    { id: 3, title: 'Spacious Villa', price: '$1,000,000', location: 'Florida' },
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
                        <p>Location: {listing.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Listings;