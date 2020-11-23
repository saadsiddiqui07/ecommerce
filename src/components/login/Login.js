import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../Firebase/firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = e => {
    e.preventDefault(); // Login logic of the user

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/");
      })
      .catch(e => alert(e.message));
  };

  const register = e => {
    e.preventDefault();
    // Registering the new user....

    auth.createUserWithEmailAndPassword(email, password).then(auth => {
      history.push("/");
    });
  };

  // console.log("Address is --->", userAddress);

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://i.pinimg.com/originals/bd/c3/d1/bdc3d1e3a1e20d2ed20385c1f85061ed.jpg"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="At least 6 characters"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="login__signInButton" type="submit" onClick={login}>
            Sign In
          </button>
        </form>
        <p>
          By creating an account, you agree to Amazon's Conditions of Use and
          Privacy Notice.
          <h5 className="login__registerText">New to Amazon?</h5>
          <button className="login__registerButton" onClick={register}>
            Create your Amazon Account
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
