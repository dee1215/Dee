import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delItem } from '../redux/action'; 
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.addItem);
 
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(delItem(item));
  };

  const renderEmptyCart = () => (
    <div className="container py-5 text-center">
      <h3>Your Cart is Empty</h3>
    </div>
  );

  const renderCartItems = () => (
    <>
      {cartItems.map((item) => (
        <div className="container my-3 p-3 border rounded" key={item.id}>
          <div className="row align-items-center">
            <div className="col-md-2">
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid"
                style={{ maxHeight: '150px' }}
              />
            </div>
            <div className="col-md-6">
              <h5>{item.title}</h5>
              <p className="fw-bold">GHC {item.price}</p>
            </div>
            <div className="col-md-4 text-end">
              <button
                className="btn btn-outline-danger"
                onClick={() => handleRemove(item)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  const renderCheckoutButton = () => (
    <div className="text-center my-4">
      <NavLink to="/checkout" className="btn btn-primary">
        Proceed to Checkout
      </NavLink>
    </div>
  );

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Your Shopping Cart</h2>
      {cartItems.length === 0 ? renderEmptyCart() : (
        <>
          {renderCartItems()}
          {renderCheckoutButton()}
        </>
      )}
    </div>
  );
};

export default Cart;
