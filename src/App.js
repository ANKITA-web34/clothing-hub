import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./Pages/homepage/homepage.component";
import ShopPage from "./Pages/Shop/shop.component";
import SignINAndSignUpPage from "./Pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up.component";
import Header from "./Components/Header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
     if(userAuth) {
       const userRef = await createUserProfileDocument(userAuth);

       userRef.onSnapshot(snapShot => {
        this.setState ({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        })
       });
     } else {
       this.setState({currentUser: userAuth});
     } 
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser= {this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignINAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
