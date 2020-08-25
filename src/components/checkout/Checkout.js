import React from "react";
import { useStateValue } from "../../context/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ cart }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.websitestoimpress.com/blog/wp-content/uploads/2018/11/AmazonAdvertising._V280400344_.png"
          alt=""
        />
        {cart?.length === 0 ? (
          <div>
            <h1>Your cart is empty</h1>
            <p>
              To buy new products, please click on the 'Add to Cart' button next
              to the products on the home page.
              <Link className="checkout__link" to="/">
                {" "}
                <button className="checkout__button">⬅ Back to home</button>
              </Link>{" "}
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your products</h2>
            {/* List of the products to buy */}
            {cart?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
            {cart?.length >= 1 ? (
              <Link className="checkout__link" to="/">
                <button className="checkout__buttonShopping">
                  ⬅ Continue shopping
                </button>
              </Link>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
      {cart?.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
