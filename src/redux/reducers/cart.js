const initialState = {
  items: [],
  totalPrice: 0,
  itemsAmount: 0,
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ADD_PIZZA":
      let newItems;
      if (state.items.length !== 0) {
        const itemIndex = state.items.findIndex((item) => {
          if (
            item.id.toString() === action.payload.id.toString() &&
            item.sizeActive === action.payload.sizeActive &&
            item.type === action.payload.type
          )
            return item;
        });
        if (itemIndex >= 0) {
          state.items[itemIndex].amount += 1;
          newItems = state.items;
        } else {
          newItems = [...state.items, action.payload];
        }
      } else {
        newItems = [...state.items, action.payload];
      }
      return {
        items: newItems,
        itemsAmount: newItems.reduce((sum, item) => {
          return sum + item.amount;
        }, 0),
        totalPrice: newItems.reduce((sum, item) => {
          return sum + item.price * item.amount;
        }, 0),
      };
    case "SET_REMOVE_ALL_PIZZAS":
      return {
        items: [],
        totalPrice: 0,
        itemsAmount: 0,
      };
    case "SET_PIZZA_ADD":
      const itemIndex = state.items.findIndex((item) => {
        if (
          item.id.toString() === action.payload.id.toString() &&
          item.sizeActive === action.payload.sizeActive &&
          item.type === action.payload.type
        ) {
          return item;
        }
      });
      state.items[itemIndex].amount += 1;
      const pizzas = state.items;

      return {
        items: pizzas,
        itemsAmount: pizzas.reduce((sum, item) => {
          return sum + item.amount;
        }, 0),
        totalPrice: pizzas.reduce((sum, item) => {
          return sum + item.price * item.amount;
        }, 0),
      };
    case "SET_PIZZA_REMOVE":
      let pizas;
      const itmIndex = state.items.findIndex((item) => {
        if (
          item.id.toString() === action.payload.id.toString() &&
          item.sizeActive === action.payload.sizeActive &&
          item.type === action.payload.type
        ) {
          return item;
        }
      });
      if (state.items[itmIndex].amount !== 1) {
        state.items[itmIndex].amount -= 1;
        pizas = state.items;
      } else {
        pizas = state.items;
      }

      return {
        items: pizas,
        itemsAmount: pizas.reduce((sum, item) => {
          return sum + item.amount;
        }, 0),
        totalPrice: pizas.reduce((sum, item) => {
          return sum + item.price * item.amount;
        }, 0),
      };
    case "SET_ITEMPIZZA_REMOVE":
      const filterPizzas = state.items.filter((item) => {
        if (
          item.id.toString() !== action.payload.id.toString() ||
          item.sizeActive !== action.payload.sizeActive ||
          item.type !== action.payload.type
        ) {
          return item;
        }
      });

      return {
        items: filterPizzas,
        itemsAmount: filterPizzas.reduce((sum, item) => {
          return sum + item.amount;
        }, 0),
        totalPrice: filterPizzas.reduce((sum, item) => {
          return sum + item.price * item.amount;
        }, 0),
      };
    default:
      return state;
  }
};

export default card;
