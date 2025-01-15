import React from 'react';
import './App.css';
import Listing from './List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Demo Real Estate Agency</h1>
        <p>Your one-stop solution for real estate needs.</p>
        <button>View Listings</button>
        <Listing />
      </header>
    </div>
  );
}

export default App;
