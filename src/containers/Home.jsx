import React, {useEffect, useState} from 'react'
import Imgback from "../assets/img/Mask Group 2.png"
import {useDispatch, useSelector} from "react-redux"
import {getItems} from "../reducks/items/selectors"
import {fetchItems} from "../reducks/items/operations"
import {fetchCarts} from "../reducks/carts/operations"
import Item from "../components/Common/Item"


export default function Home() {
    const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const items = getItems(selector);

  useEffect(() => {
    dispatch(fetchItems());
    if (localStorage.getItem("LOGIN_USER_KEY")) {
      dispatch(fetchCarts());
    }
  }, []);

    

  return (
    <>
    <header>
      <div class="bg">
        <img src={Imgback} alt=""></img>
      </div>
      <div class="bg-content">
           <h1>Dino's Pizzeria</h1>
            <h4>Pizza is our Superpower</h4>
        </div>
    </header>

    <article>
    <div class="abt">
            <h3>About Us</h3>
            <div class="about-us-desp">
                <p>In Dino's Pizzeria pizza usually falls into two categories:
                </p>
                <br></br>
                <p>thick and cheesy Chicago style or thin and more traditional Dino’s Pizzeria pizza.
                </p>
                <br></br>
                <p>In Italy pizza also falls into two distinct categories: Italian pizza and the rest of the world.</p>
            </div>
        </div>
    </article>

    <section class="items">
        <div class="menu">
            <h2>------------ Pizza Menu ------------</h2>
        </div>
        <div class="container">
    {items && 
         items.map((item) => (

            <Item key={item.id} item={item} />
        ))}

       </div>    

    </section>
    </>
  )
}
