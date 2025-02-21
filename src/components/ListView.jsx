import React from 'react';

function ListView({ product }) {
    return (

        <div className='list'>
            <img width="100" height="80" src={product.img} alt="card" />
            <h3>{product.name}</h3>
            <span>{product.color}</span>
            <div  className="prices priceList">
                <span className='cent'>${product.price}</span>
                <button>ADD TO CARD</button>
            </div>

        </div>
    )
}
export default ListView;