import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "./Header.css";
import { useStateValue } from "../../context/StateProvider";
import { auth } from "../../Firebase/firebase";

function Header() {
  const [{ cart, user }] = useStateValue();

  const logout = (e) => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      {/* logo on the left of the header */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* Search box */}
      <div className="header__search">
        <input
          type="text"
          placeholder="Search for products..."
          className="header__searchInput"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* first link */}
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={logout} className="header__options">
            <span className="headeroption_firstLine">
              Hello {user?.email[0]}
            </span>
            <span className="headeroption__secondLine">
              {!user ? "Sign In" : "Sign Out"}
            </span>
          </div>
        </Link>
        {/* second Link */}
        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="headeroption_firstLine">Return</span>
            <span className="headeroption__secondLine">& orders</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <AddShoppingCartIcon />
            <span className="headeroption__secondLine header__basketcount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
