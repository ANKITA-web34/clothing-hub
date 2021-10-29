import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../Cart-icon/cart-icon.component";
import CartDropdown from "../Cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../Redux/Cart/cart.selector";
import { selectCurrentUser } from "../../Redux/User/user.selectors";

import {
  HeaderContainer,
  Height,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Height />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/">HOME</OptionLink>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
