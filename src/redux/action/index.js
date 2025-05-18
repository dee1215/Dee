
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product
  };
};

// Remove item from cart
export const delItem = (product) => {
  return {
    type: "DELITEM",
    payload: product
  };
};
