import React from 'react';

function Listing({ title, image, price }) {
  return (
    <div className="listing">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Price: ${price}</p>
    </div>
  );
}

export default Listing;
