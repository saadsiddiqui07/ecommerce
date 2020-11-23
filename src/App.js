/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/home/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
// import Payment from "./components/payment/Payment.jsx";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./Firebase/firebase";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

/* const promise = loadStripe(
  "pk_test_51HSkQyGdgvUPLMwWtRmW2K9KpvXafdXLljoJ5cWCScvu9pRtL2cKaxZiE7aFN20hx7GjRr2YHrNRk1iLTx5EO5cf009cYmXFuI"
);
*/
function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser, authUserAdress) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
          address: authUserAdress,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
          address: "",
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  // console.log("USER IS >>>>>>", user);
  // console.log("Address is ---> ", address);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/*          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route> */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
