import React from 'react';
import './App.css';
import Listings from './Listings'; // Import Listings component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Demo Real Estate Agency</h1>
        <p>Your one-stop solution for real estate needs.</p>
        <button>View Listings</button>
      </header>
      <Listings />  {/* Render Listings component */}
    </div>
  );
}

export default App;