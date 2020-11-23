/* eslint-disable no-unused-vars */
import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../../context/StateProvider";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../../context/reducer";
import { Link, useHistory } from "react-router-dom";

function Subtotal() {
  const [{ cart, user }, dispatch] = useStateValue();
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({cart.length} {cart.length === 1 ? "item" : "items"}):{" "}
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This contains a free coupon.
            </small>
          </div>
        )}
        decimalScale={2}
        prefix={"$"}
        displayType={"text"}
        thousandSeparator={true}
        value={getCartTotal(cart)}
      />
      <Link to={!user && "/login"}>
        <button
          onClick={() => history.replace("/payment")}
          className="subtotal__link"
        >
          {" "}
          {!user ? "Please Sign In first." : "Proceed to checkout"}
        </button>
      </Link>
    </div>
  );
}
export default Subtotal;
