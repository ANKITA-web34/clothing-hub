import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../Cart-icon/cart-icon.component";
import CartDropdown from "../Cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../Redux/Cart/cart.selector";
import { selectCurrentUser } from "../../Redux/User/user.selectors";
import { signOutStart } from "../../Redux/User/user.actions";

import {HeaderContainer, Height, LogoContainer, OptionLink, OptionsContainer } from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Height />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/">HOME</OptionLink>
      <OptionLink to="/shop">SHOP</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
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

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
