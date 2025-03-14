import React from "react";

function Listing({url,MainImage,title,currency_code,price,quantity}) {
    return (
        <div class="item-list">
            <div class="item">
                <div class="item-image">
                    <a href={url}>
                        <img src={MainImage} />
                    </a>
                </div>
                <div class="item-details">
                    <p class="item-title">{title}</p>
                    <p class="item-price">{currency_code}{price}</p>
                    <p class="item-quantity level-medium">{quantity} left</p>
                </div>
            </div>
        </div>
    )
}

export default Listing;