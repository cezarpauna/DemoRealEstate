import React from 'react';

function Listings() {
  const properties = [
    { id: 1, title: 'Luxury Villa in California', price: '$1,500,000' },
    { id: 2, title: 'Apartment in New York', price: '$800,000' },
    { id: 3, title: 'Beach House in Florida', price: '$950,000' }
  ];

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            {property.title} - {property.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;