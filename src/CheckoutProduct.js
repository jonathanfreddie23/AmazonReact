import React from 'react';
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price}) {
   
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    } 
    
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="CheckoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
