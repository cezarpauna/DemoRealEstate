import React from 'react';
import './App.css';
import Listing from './Listing';

function App() {
  const listings = [
    { title: 'Cozy Cottage', image: 'https://via.placeholder.com/150', price: 150000 },
    { title: 'Modern Apartment', image: 'https://via.placeholder.com/150', price: 250000 },
    { title: 'Spacious Villa', image: 'https://via.placeholder.com/150', price: 400000 }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Demo Real Estate Agency</h1>
        <p>Your one-stop solution for real estate needs.</p>
        <div className="listings">
          {listings.map((listing, index) => (
            <Listing key={index} title={listing.title} image={listing.image} price={listing.price} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
