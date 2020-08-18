import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./Basket.scss";
import iconBasket from "../../../assets/img/BasketCard.svg";
import iconTrash from "../../../assets/img/iconTrash.svg";
import CardItem from "./CardItem";

import { allPizzasRemove } from "../../../redux/actions/cart";

const cardItems = [
  {
    id: 1,
    pizzaName: "Сырный цыпленок",
    type: "тонкое тесто",
    size: "26 см.",
    amount: 2,
    price: "17770",
  },
  {
    id: 2,
    pizzaName: "Креветки по-азиатски",
    type: "толстое тесто",
    size: "40 см.",
    amount: 1,
    price: "290",
  },
  {
    id: 3,
    pizzaName: "Чизбургер-пицца",
    type: "тонкое тесто",
    size: "30 см.",
    amount: 3,
    price: "350",
  },
];

function Basket({ items }) {
  const dispatch = useDispatch();
  const { totalPrice, itemsAmount } = useSelector(
    ({ cartReducer }) => cartReducer
  );

  return (
    <div className="card-container">
      <div className="card-container__top">
        <div className="card-container__top-title">
          <img src={iconBasket} alt="Basket Icon" />
          <div>Корзина</div>
        </div>
        <div className="card-container__top-trash">
          <img src={iconTrash} alt="Trahs Icon" />
          <div onClick={() => dispatch(allPizzasRemove(items))}>
            Очистить корзину
          </div>
        </div>
      </div>
      <div className="card-container__items">
        {items.map((item, index) => (
          <CardItem key={index} pizzas={item} />
        ))}
      </div>
      <div className="card-container__bottom">
        <div className="amount-price">
          <div className="amount">
            <span>
              Всего пицц: <strong>{itemsAmount} шт.</strong>
            </span>
          </div>
          <div className="price">
            <span>
              Сумма заказа: <strong>{totalPrice} kzt</strong>
            </span>
          </div>
        </div>
        <div className="all-btn">
          <Link to="/" className="all-btn-close">
            Вернуться назад
          </Link>
          <button className="all-btn-pay">Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
