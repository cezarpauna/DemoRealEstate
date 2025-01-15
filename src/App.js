import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Real Estate Agency</h1>
        <p>We help you find your dream home.</p>
      </header>
      <main>
        <h2>Listings</h2>
        <div className="listings">
          {/* Listings will go here */}
        </div>
      </main>
      <footer>
        <p>Contact us at info@realestateagency.com</p>
      </footer>
    </div>
  );
}

export default App;