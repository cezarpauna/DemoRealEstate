import React from 'react';
import './Listings.css';

const listings = [
    { id: 1, title: 'Luxury Villa', price: '$1,200,000', description: 'A beautiful luxury villa in the heart of the city.' },
    { id: 2, title: 'Modern Apartment', price: '$850,000', description: 'A spacious modern apartment with great amenities.' },
    { id: 3, title: 'Cozy Cottage', price: '$400,000', description: 'A cozy cottage perfect for a small family.' },
];

function Listings() {
    return (
        <div className="Listings">
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
