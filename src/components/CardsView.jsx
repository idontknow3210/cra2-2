import React from 'react';

function CardsView({ product }) {
  return (

    <div className='module'>
      <h3>{product.name}</h3>
      <span>{product.color}</span>
      <img width="200" height="180" src={product.img} alt="card" />
      <div className="prices priceCard">
        <span className='cent'>${product.price}</span>
        <button>ADD TO CARD</button>
      </div>
    </div>

  );
}
export default CardsView;
