/* eslint-disable no-empty-pattern */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "./Product.css";
import { useStateValue } from "../../context/StateProvider";

function Product({ id, image, price, title, rating }) {
  const [{}, dispatch] = useStateValue();

  const addToCart = () => {
    // ADDING ITEMS TO THE CART
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id,
        title,
        price,
        rating,
        image
      }
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>
          <strong>{title}</strong>
        </p>
        <p className="product__price">
          <small>$ </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(_ => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToCart}>Add to cart 🛒</button>
    </div>
  );
}

export default Product;
