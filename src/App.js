import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch, useStore } from "react-redux";

import "./App.css";

import HomePage from "./Pages/homepage/homepage.component";
import ShopPage from "./Pages/Shop/shop.component";
import SignINAndSignUpPage from "./Pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up.component";
import CheckoutPage from "./Pages/Checkout/checkout.component";

import Header from "./Components/Header/header.component";

import { selectCurrentUser } from "./Redux/User/user.selectors";
import { checkUserSession } from "./Redux/User/user.actions";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignINAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
