import React from "react";
import { Route, Switch } from "react-router";
import Home from "./containers/Home";
import Signup from "./containers/Signup";
import Signin from "./containers/Signin";
import Cart from "./containers/Cart";
import Shipment from "./containers/Shipment";
import Thankyou from "./containers/Thankyou";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/signup"} component={Signup} />
        <Route exact path={"/cart"} component={Cart} />
        <Route exact path={"/signin"} component={Signin} />
        <Route exact path={"/shipment"} component={Shipment} />
        <Route exact path={"/thankyou"} component={Thankyou} />
      </Switch>
    </>
  );
};
export default Router;
