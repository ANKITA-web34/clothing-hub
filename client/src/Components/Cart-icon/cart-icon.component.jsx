import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../Redux/Cart/cart.actions';
import { selectCartItemsCount } from '../../Redux/Cart/cart.selector';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
// import { createUserProfileDocument } from '../../firebase/firebase.utils';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick= {toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToPops = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapSateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapSateToProps, mapDispatchToPops)(CartIcon);