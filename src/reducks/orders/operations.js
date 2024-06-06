import API from "../../API";
import { addCartAction } from "./actions";
import { push } from "connected-react-router";

const api = new API();
const CARTS_KEY = "CARTS_KEY";

export const addOrder = (
  total_price,
  full_name,
  phone,
  address,
  pin,
  apt,
  city,
  state
) => {
  return async (dispatch, getState) => {
    if (user_name === "" || email === "" || password === "") {
      alert("Please fill out name, email, and password.");
      return false;
    }
    return api
      .addOrder(total_price, full_name, phone, address, pin, apt, city, state)
      .then((addedOrder) => {
        dispatch(addOrderAction(order));
      })
      .catch((error) => {
        alert("Failed to connect API to add cart");
        console.log(error);
      });
  };
};
