import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./HomePage.scss";

import Header from "./Header";
import Nav from "./Nav/Nav";
import Card from "./Card/Card";
import Basket from "./Basket";
import CardIsEmpty from "./Basket/CardIsEmpty";
import LoadingBlock from "./Card/LoadingBlock";

import { fatchPizzas } from "../../redux/actions/pizzas";
import { cart } from "../../redux/actions/cart";

function HomePage() {
  const dispatch = useDispatch();

  const qoima = useSelector(({ pizzasReducer }) => pizzasReducer.items);
  const isLoaded = useSelector(({ pizzasReducer }) => pizzasReducer.isLoaded);
  const { items } = useSelector(({ cartReducer }) => cartReducer);
  const { category, sortBy } = useSelector(
    ({ filterReducer }) => filterReducer
  );

  useEffect(() => {
    dispatch(fatchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onClickAddPizza = (pizzaObj) => {
    dispatch(cart(pizzaObj));
  };

  return (
    <div className="react-pizza">
      <Header />
      <Route exact path="/">
        <div className="container">
          <Nav category={category} sortBy={sortBy} />
          <h1>Все пиццы</h1>
          <section>
            {isLoaded
              ? qoima.map((cart) => (
                  <Card
                    onClickAddPizza={onClickAddPizza}
                    cart={cart}
                    items={items}
                    key={cart.id}
                  />
                ))
              : Array(8)
                  .fill(0)
                  .map((_, index) => <LoadingBlock key={index} />)}
          </section>
        </div>
      </Route>
      {Object.keys(items).length !== 0 ? (
        <Route path="/card">
          <Basket items={items} />
        </Route>
      ) : (
        <Route path="/card" component={CardIsEmpty} />
      )}
    </div>
  );
}

export default HomePage;
