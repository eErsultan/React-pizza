export const fatchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  fetch(
    `http://localhost:3004/cart?${
      category !== 1 ? `category=${category}` : ""
    }&_sort=${sortBy}&_order=${sortBy !== "rating" ? "asc" : "desc"}`
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});

const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});
