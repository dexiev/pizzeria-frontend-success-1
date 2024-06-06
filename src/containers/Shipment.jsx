import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../API";
import { getCarts, getSubtotal } from "../reducks/carts/selectors";
import { fetchCarts } from "../reducks/carts/operations";
const api = new API();

export default function Shipment() {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();

  const subtotal = getSubtotal(selector);
  const carts = getCarts(selector);

  const [full_name, setFullName] = useState(""),
    [phone, setPhone] = useState(""),
    [address, setAddress] = useState(""),
    [pincode, setPincode] = useState(""),
    [apt, setApt] = useState(""),
    [city, setCity] = useState(""),
    [state, setState] = useState(""),
    [totalitem, setTotalItem] = useState(0);



    useEffect(() => {
        dispatch(fetchCarts());
      }, []);
    
      useEffect(() => {
        let arr = [];
        if (carts != undefined && carts.length > 0) {
          for (let key in carts) {
            arr.push(carts[key].quantity);
          }
          let sum = arr.reduce(function (a, b) {
            return a + b;
          }, 0);
          setTotalItem(sum);
        }
      }, [carts]);
    
      const inputFullname = (e) => {
        setFullName(e.target.value);
      };
    
      const inputPhoneNumber = (e) => {
        setPhone(e.target.value);
      };
    
      const inputAddress = (e) => {
        setAddress(e.target.value);
      };
    
      const inputPin = (e) => {
        setPincode(e.target.value);
      };
    
      const inputApt = (e) => {
        setApt(e.target.value);
      };
    
      const inputCity = (e) => {
        setCity(e.target.value);
      };
    
      const inputState = (e) => {
        setState(e.target.value);
      };

      useEffect(() => {
        console.log(full_name)
        console.log(phone)
        console.log(address)
        console.log(pincode)
        console.log(apt)
        console.log(city)
        console.log(state)
        console.log(totalitem)
      }, [])
    
      const orderButton = (e) => {
        let params = {
          total_price: subtotal,
          full_name: full_name,
          address_line1: address,
          address_line2: apt,
          city: city,
          state: state,
          postal_code: pincode,
          country: "US",
          telephone: phone,
        };
        api.orderAdd(params).then(window.location.replace("thankyou"));
        e.preventDefault();
      };

    return (
        <>
        <section class="main3">
          <h2>------Order Your Items------</h2> 
          <br/><br/>
        </section>
      <section class="bg-checkout-data">
        <div class="product-details">
          <p class="shipment-details">Shipment Details</p>
          <p class="confirm">Please check your items and confirm it</p>
          <table>
            {carts &&
              carts.map((cart) => (
                <tr>
                  <td class="td-item">{cart.item.name}</td>
                  <td class="td-quantity">{cart.quantity}</td>
                  <td class="td-price">$ {cart.item.price}</td>
                </tr>
              ))}
            <tr class="total">
              <td class="td-item">Total</td>
              <td class="td-quantity">{totalitem}</td>
              <td class="td-price">$ {subtotal}</td>
            </tr>
          </table>
        </div>
        <div class="address-details">
          <form action="/">
            <label for="name">Full name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Recipients name"
              onChange={inputFullname}
              required
            />

            <label for="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              id="name"
              placeholder="Enter Phone Number"
              onChange={inputPhoneNumber}
              required
            />

            <label for="address">Street address or P.O. Box</label>
            <input
              type="text"
              name="address"
              id="name"
              placeholder="Enter Street address or P.O. Box"
              onChange={inputAddress}
              required
            />

            <label for="pin">PIN Code</label>
            <input
              type="text"
              name="pin"
              id="name"
              placeholder="Enter PIN Code"
              onChange={inputPin}
              required
            />

            <label for="apt">Apt, suit, unit, building, floor, etc</label>
            <input
              type="text"
              name="apt"
              id="name"
              placeholder="Enter Apt, suit, unit, building, floor, etc"
              onChange={inputApt}
              required
            />

            <label for="city">City</label>
            <input
              type="text"
              name="city"
              id="name"
              placeholder="Enter City"
              onChange={inputCity}
              required
            />

            <label for="state">State</label>
            <input
              type="text"
              name="state"
              id="name"
              placeholder="Enter State"
              onChange={inputState}
              required
            />

            <input
              type="submit"
              name="submit"
              value="SUBMIT"
              class="checkout-btn"
              onClick={orderButton}
            />
          </form>
        </div>
      </section>
    </>
       
    )
}
