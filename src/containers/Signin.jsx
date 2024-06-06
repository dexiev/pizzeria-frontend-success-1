import React from 'react'
// import ImgCross from "../assets/img/cross.png"
import Home from "./Home";
import { signIn } from "../reducks/user/operations";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { push } from "connected-react-router";


    function Signin() {
        const dispatch = useDispatch();
      
        const closeButton = () => {
          dispatch(push("/"));
        };
      
        const [email, setEmail] = useState(""),
          [password, setPassword] = useState("");
      
        const inputEmailAddress = (event) => {
          setEmail(event.target.value);
        };
      
        const inputPassword = (event) => {
          setPassword(event.target.value);
        };
      
        const JoinUsButton = (event) => {
          event.preventDefault();
          dispatch(signIn(email, password));
          setEmail("");
          setPassword("");
        };
      
    return (
    <>
    <Home />
    
        <section class="popup">
        <div class="popup-inner">
                    {/* <img src={ImgCross} class="close" /> */}
                    <h2>SIGN IN</h2>
                    <div class="popup-input">
                    
                    <input type="email" required placeholder="Email Address" onChange={inputEmailAddress}/>
                    <br/><br/>
                    <input type="password"  required placeholder="Password" onChange={inputPassword} />
                    <br/><br/>
                    <input type="button" class="signin-btn" onClick={JoinUsButton} value="SIGN IN" /><br/><br/>
                    <p>Not a Member?<a href="/signup">Join Us</a></p>
                    
                    
                    </div>
              
            
        </div>
    </section>

    </>
    )
}

export default Signin;
