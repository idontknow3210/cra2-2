import React from 'react';
import data from "./data.json";
import Listing from './Listing.jsx';



function Store() {
    const products = JSON.parse(JSON.stringify(data));






    return (
        <>
        {products.map((el, id)=>(
            <Listing key={id} url={el.url} MainImage={el.MainImage.url_570xN} title={el.title} currency_code={el.currency_code} price={el.price} quantity={el.quantity}/>
        ))}
        {console.log(products[0].MainImage.url_570xN)}
        </>

    );

};


export default Store;