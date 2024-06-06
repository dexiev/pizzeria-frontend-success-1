import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../../reducks/carts/operations";
import { getCarts, getSubtotal } from "../../reducks/carts/selectors";
import {push} from "connected-react-router"

export default function Item({item}) {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);
  const [particularCart, setParticularCart] = useState(null);
  const key = localStorage.getItem("LOGIN_USER_KEY");

  useEffect(() => {
    if (carts != undefined && carts.length > 0) {
      console.log("carts");
      console.log(carts);
      let matchedCarts = carts.filter((cart) => cart.item.id == item.id);
      console.log("matchedCarts");
      console.log(matchedCarts);
      if (matchedCarts.length > 0) {
        setParticularCart(matchedCarts[0]);
      } else {
        setParticularCart(null);
      }
    }
  }, [subtotal]);

  const clickAddCart = () => {
    // if (key) {
      dispatch(addCart(item));
    // } else {
    //   dispatch(push("/signin"));
    }

  const clickPlusCart = () => {
    dispatch(increaseCart(particularCart.id));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(particularCart.id));
  };

    return (
        <>
        
     
        <div class="pizza-1">
        <img src={item.image} alt="" />
        <h3>{item.name}</h3>
        <br></br>
        <p>{item.description}</p>
        <div class="price">
          <h4> $ {item.price}</h4>
          {particularCart && particularCart.quantity > 0 ? (
            <div class="add-btn">
              <span class="minus" onClick={clickMinusCart}>
                －
              </span>
              <span class="count">{particularCart.quantity} </span>
              <span class="plus" onClick={clickPlusCart}>
                +
              </span>
            </div>
          ) : (
            <button class="add-btn" onClick={clickAddCart}>
              Add +
            </button>
          )}
      </div>
      </div>
  
      
    </>
        
    )
}
