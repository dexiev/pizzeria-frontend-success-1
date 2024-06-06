import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../../reducks/carts/operations";
import { getCarts, getSubtotal } from "../../reducks/carts/selectors";

export default function CartItem({ cart }) {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);

  const clickPlusCart = () => {
    dispatch(increaseCart(cart.id));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(cart.id));
  };

  return (
    <>
     
        <div class="pizza-1">
        <div>
                <img
                    src={"https://res.cloudinary.com/jithu25sams28/" + cart.item.image}
                    
                    alt=""
                />
            </div>
          <h3>{cart.item.name}</h3>
          <br></br>
          <p>{cart.item.description}</p>
          <div class="price">
            <h4> $ {cart.item.price}</h4>
            {cart && cart.quantity > 0 && (
              <div class="add-btn">
                <span class="minus" onClick={clickMinusCart}>
                  －
                </span>
                <span class="count">{cart.quantity} </span>
                <span class="plus" onClick={clickPlusCart}>
                  +
                </span>
              </div>
            )}
          </div>
        </div>
    
    </>
  );
}
