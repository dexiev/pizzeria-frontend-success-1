import React from "react";
import Home from "./Home";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { signUp } from "../reducks/user/operations";
import ImgCross from "../assets/img/cross.png";


export default function Signup() {
  const dispatch = useDispatch();

  const closeButton = () => {
    dispatch(push("/"));
  };

  const [user_name, setUserName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputUserName = (event) => {
    setUserName(event.target.value);
  };

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);
  };

  const signUpButton = (e) => {
    e.preventDefault();
    dispatch(signUp(user_name, email, password));
    setUserName("");
    setEmail("");
    setPassword("");
  };
  
    return (
    <>
    <Home />
        <section class="popup">
        <div class="popup-inner-signup">
                    {/* <img src={ImgCross} class="close" /> */}
                    <h1>Dino's Pizzeria</h1>
                    <h3>SIGN UP</h3>
                    <div class="popup-input">
                      <h4>Name</h4>
                    <input type="text" name="username" id="username"  placeholder="User Name" onChange={inputUserName} /><br/><br/>
                    <h4>Email</h4>
                    <input type="text" name="email" id="email"  placeholder="Email Address" onChange={inputEmail} /><br/><br/>
                    <h4>Password</h4>
                    <input type="text" name="password" id="password"  placeholder="Password" onChange={inputPassword} /><br/><br/>
                    <br /><br/>
                    <input type="button" class="signup-btn" onClick={signUpButton} value="SIGN UP" />
                    
    
                    <p>Already a Member?<a href="/signin">Sign in</a></p>
                    </div>
                    </div>
                    </section>

      
    </>
  );
}
