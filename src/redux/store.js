import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import filterReducer from "./reducers/filter";
import pizzasReducer from "./reducers/pizzas";
import cartReducer from "./reducers/cart";

const rootReducer = combineReducers({
  filterReducer,
  pizzasReducer,
  cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
