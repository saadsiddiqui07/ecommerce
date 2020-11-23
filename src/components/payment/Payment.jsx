/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useStateValue } from "../../context/StateProvider.js";
import CheckoutProduct from "../checkout/CheckoutProduct.js";
import { Link, useHistory } from "react-router-dom";
import "./Payment.css";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../../context/reducer";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "../../axios";

const Payment = () => {
  const [{ cart, user, address }, dispatch] = useStateValue();
  const history = useHistory();
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // generate a secret key which will charge a product
    const getClientSecretKey = async () => {
      const response = await axios({
        method: "post",
        url: `payments/create?total=${getCartTotal(cart) * 100}`
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecretKey();
  }, [cart]); // --> dependency

  const handleSubmit = async e => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace("/orders");
      });
  };

  const handleChange = e => {
    e.preventDefault();
    // listen for changes in CardElement & display erros of the customers card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h3>
          Checkout (
          <Link className="payment__containerCounter" to="/checkout">
            {cart.length} {cart.length <= 1 ? "item" : "items"}.
          </Link>
          ){" "}
        </h3>
        {/* DELIVERY SECTION */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address:</h3>
          </div>
          <div className="payment__details">
            <p>{user?.email}</p>
            <p>{address}</p>
            <p>Bandra west, Mumbai 400-050</p>
          </div>
        </div>

        {/* REVIEW PRODUCTS SECTION */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Your products.</h3>
          </div>
          <div className="payment__items">
            {cart.map(item => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* PAYMENT METHOD */}

        <div className="payment__section">
          <div className="payment__title">
            <h3>Buy products</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
            </form>

            <div className="payment__priceContainer">
              <CurrencyFormat
                renderText={value => <h3>Order Total: {value}</h3>}
                decimalScale={2}
                prefix={"$"}
                displayType={"text"}
                thousandSeparator={true}
                value={getCartTotal(cart)}
              />
              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing..</p> : "Buy now"}</span>
              </button>
            </div>
            {error && <div>{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
