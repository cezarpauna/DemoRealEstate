import React from 'react';
import './App.css';
import Listing from './Listings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Demo Real Estate Agency</h1>
        <p>Your one-stop solution for real estate needs.</p>
        <button>View Listings</button>
      </header>
      <Listing />
    </div>
  );
}

export default App;