import React from "react";
import { connect } from "react-redux";
import CustomButton from '../Custom-button/custom-button.component';
import CartItem from "../Cart-item/cart-item.componnent";
import { selectCartItems } from "../../Redux/Cart/cart.selector";

import './cart-dropdown.styles.scss';


const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
   cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);