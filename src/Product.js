import React from 'react'
import ReactStars from 'react-stars'
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price}) {

    const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };


    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                
                <div className="product__rating">
                    <p><ReactStars
                    color2={'#ffd700'} /></p>
                </div>

            </div>

            <img src={image} alt="" />

            <button onClick={addToBasket}> Add to basket </button>

        </div>
    )
}

export default Product;
