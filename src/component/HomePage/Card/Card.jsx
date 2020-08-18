import React, { useState } from "react";

import TypesPizza from "./TypesPizza";
import SizePizza from "./SizePizza";
import { useSelector } from "react-redux";

const types = [
  { id: 1, text: "тонкое" },
  { id: 2, text: "традиционные" },
];

const size = [
  { id: 1, size: 26 },
  { id: 2, size: 30 },
  { id: 3, size: 40 },
];

function Cart({ cart, onClickAddPizza, items }) {
  const [typeActive, setTypeActive] = useState(cart.types[0]);
  const [sizeActive, setSizeActive] = useState(cart.sizes[0]);

  const clickType = (type) => {
    setTypeActive(type);
  };

  const clickSize = (size) => {
    setSizeActive(size);
  };

  const onAddPizza = (pizzaObj) => {
    const obj = {
      id: pizzaObj.id,
      img: pizzaObj.img,
      name: pizzaObj.pizzaName,
      price: pizzaObj.price,
      type: types[typeActive].text,
      sizeActive,
      amount: 1,
    };
    onClickAddPizza(obj);
  };

  const amount = items.map((item) => {
    if (item.id === cart.id) {
      return item.amount;
    }
    return 0;
  });
  const totalAmount = amount.reduce((sum, item) => {
    return item + sum;
  }, 0);

  return (
    <div className="cart">
      <img src={cart.img} alt="Pizza" />
      <div className="cart__pizza-name">{cart.pizzaName}</div>
      <div className="cart__pizza-block">
        <ul>
          {types.map((t, index) => (
            <TypesPizza
              key={t.id}
              types={t}
              clickType={clickType}
              typeActive={typeActive}
              type={cart.types}
              index={index}
            />
          ))}
        </ul>
        <ul>
          {size.map((s) => (
            <SizePizza
              key={s.id}
              size={s}
              clickSize={clickSize}
              sizeActive={sizeActive}
              sizes={cart.sizes}
            />
          ))}
        </ul>
      </div>
      <div className="cart__pizza-block-bottom">
        <div className="price">от {cart.price} kzt</div>
        <div onClick={() => onAddPizza(cart)} className="add-cart-btn">
          <div>Добавить</div>
          {totalAmount ? <span>{totalAmount}</span> : null}
        </div>
      </div>
    </div>
  );
}

export default Cart;
