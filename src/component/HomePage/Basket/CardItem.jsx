import React from "react";
import { useDispatch } from "react-redux";

import plusPizza from "../../../assets/img/Plus.svg";
import minusPizza from "../../../assets/img/Minus.svg";
import removeItem from "../../../assets/img/remove.svg";

import {
  pizzaAdd,
  pizzaRemove,
  itemPizzaRemove,
} from "../../../redux/actions/cart";

function CardItem({ pizzas }) {
  const dispatch = useDispatch();

  return (
    <div className="item">
      <div className="item-container">
        <img src={pizzas.img} alt="Pizza" />
        <div className="item-container-info">
          <div className="item-container-info_name">{pizzas.name}</div>
          <p>
            {pizzas.type}, {pizzas.sizeActive} см
          </p>
        </div>
      </div>
      <div className="item-container2">
        <div className="item-container2-amount">
          <img
            src={plusPizza}
            onClick={() => dispatch(pizzaAdd(pizzas))}
            alt="Plus"
          />
          <div>{pizzas.amount}</div>
          <img
            src={minusPizza}
            onClick={() => dispatch(pizzaRemove(pizzas))}
            alt="Minus"
          />
        </div>
        <div className="item-container2-price">
          {pizzas.price * pizzas.amount} kzt
        </div>
        <img
          src={removeItem}
          onClick={() => dispatch(itemPizzaRemove(pizzas))}
          alt="Remove"
          className="item-container2-remove"
        />
      </div>
    </div>
  );
}

export default CardItem;
