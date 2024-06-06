import React, {useEffect, useState} from "react";
import ImgCart from "../../assets/img/Cart.png";
import { signOut } from "../../reducks/user/operations";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

function Header() {
    const dispatch = useDispatch();
  const key = localStorage.getItem("LOGIN_USER_KEY");
  const [checkUser, setCheckUser] = useState(false);
  const signOutButton = () => {
    dispatch(signOut());
    setCheckUser(false);
    dispatch(push("/signin"));
  };
  useEffect(() => {
    if (key != null) {
      setCheckUser(true);
    }
  }, [key]);
    return (
        <>
        <section class="header">
        
            <div class="submarine">
                <a href="#" class="logo"><h2>Dino's Pizzeria</h2></a>
            </div>
            <div class="cart">
                {key ? (

                <span class="sign-in" onClick={signOutButton}>Logout</span>
                ) : (
                    <a href="/signin">Sign In</a>
                    )
                }
                {checkUser && (
                <a href="/cart" ><img src={ImgCart} /></a>
                )}
            </div>
      </section>
    </>
    )
}

export default Header;
