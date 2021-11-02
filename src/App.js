import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./Pages/homepage/homepage.component";
import ShopPage from "./Pages/Shop/shop.component";
import SignINAndSignUpPage from "./Pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up.component";
import CheckoutPage from "./Pages/Checkout/checkout.component";

import Header from "./Components/Header/header.component";

import { auth,createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./Redux/User/user.actions";
import { selectCurrentUser } from "./Redux/User/user.selectors";



class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot((snapShot) => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data(),
    //       });
    //     });
    //   } else {
    //     setCurrentUser(userAuth);
    //   }
    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignINAndSignUpPage />
              )
          }/>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapdispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapdispatchToProps)(App);
