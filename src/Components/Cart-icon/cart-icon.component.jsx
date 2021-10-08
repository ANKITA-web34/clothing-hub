import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../Redux/Cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick= {toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToPops = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapSateToProps = ({cart: { cartItems }}) => ({
    itemCount: cartItems.reduce((accumulatorQuantity, cartItem) => 
        accumulatorQuantity + cartItem.quantity, 0)
});

export default connect(mapSateToProps, mapDispatchToPops)(CartIcon);