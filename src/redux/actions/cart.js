export const cart = (pizzaObj) => ({
  type: "SET_ADD_PIZZA",
  payload: pizzaObj,
});

export const allPizzasRemove = (allPizzas) => ({
  type: "SET_REMOVE_ALL_PIZZAS",
  payload: allPizzas,
});

export const pizzaAdd = (pizzaObj) => ({
  type: "SET_PIZZA_ADD",
  payload: pizzaObj,
});

export const pizzaRemove = (pizzaObj) => ({
  type: "SET_PIZZA_REMOVE",
  payload: pizzaObj,
});

export const itemPizzaRemove = (pizzaObj) => ({
  type: "SET_ITEMPIZZA_REMOVE",
  payload: pizzaObj,
});
