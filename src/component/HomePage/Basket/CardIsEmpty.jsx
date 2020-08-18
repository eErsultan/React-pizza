import React from "react";
import { Link } from "react-router-dom";

import "./CardIsEmpty.scss";
import smileIcon from "../../../assets/img/smile.svg";
import cardEmpty from "../../../assets/img/cardEmpty.svg";

function CardIsEmpty() {
  return (
    <div className="card-is-empty">
      <div className="card-is-empty_title">
        <h1>Корзина пустая</h1>
        <img src={smileIcon} alt="Smile" />
      </div>
      <div className="card-is-empty_text">
        <p>Вероятней всего, вы не заказывали ёще пиццу.</p>
        <p>Для того, чтобы заказать пиццу, перейти на главную страницу.</p>
      </div>
      <img src={cardEmpty} alt="Card is empty" className="card-is-empty_img" />
      <Link to="/" className="card-is-empty_close">
        Вернуться назад
      </Link>
    </div>
  );
}

export default CardIsEmpty;
