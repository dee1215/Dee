import { ADDITEM, DELITEM } from "../action";

// Initial state: empty cart
const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload
  switch (action.type) {
    case "ADDITEM":
      // Check if item already exists in cart
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // If it exists, increase quantity
        return state.map((x) =>
          x.id === action.payload.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload
        // If it doesn't, add new item with qty = 1
        return [...state, 
          { ...product, 
            qty: 1 }];
      }
      

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        // Remove item if quantity is 1
        return state.filter((x) => x.id !== exist1.id);
      } else {
        // Otherwise, decrease quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty- 1 } : x
        );
      }
      
    default:

      return state;
  }
};

export default handleCart;
