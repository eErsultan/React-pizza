import React from "react";
import { Link } from "react-router-dom";

import headerLogo from "../../assets/img/f9f670697fd9287efa7cab2cffff922e.png";
import iconCard from "../../assets/img/iconfinder_shopping-cart_2561279 1.svg";
import { useSelector } from "react-redux";

function Header() {
  const { totalPrice, itemsAmount } = useSelector(
    ({ cartReducer }) => cartReducer
  );

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={headerLogo} alt="Pizza Logo" />
        <div className="header__logo-title">
          <h1>REACT PIZZA</h1>
          <p>самая вкусная пицца</p>
        </div>
      </Link>
      <Link to="/card" className="header__card">
        <span>{totalPrice} kzt</span>
        <img src={iconCard} alt="Icon Card" />
        <span>{itemsAmount}</span>
      </Link>
    </header>
  );
}

export default Header;
