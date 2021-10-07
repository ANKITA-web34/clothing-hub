import React from "react";
import { connect } from "react-redux";

import CustomButton from "../Custom-button/custom-button.component";
import { addItem } from "../../Redux/Cart/cart.actions";

import './collection-item.styles.scss';

const CollectionItem =({ id, name, price, imageUrl}) => (
    <div className="collection-item">
        <div className="image"
         style = {{ backgroundImage: `url(${imageUrl})`}}>
         </div>
        <div className="collection-footer">
            <span className='name'>{ name }</span>
            <span className='price'>{ price }</span>
        </div>    
        <CustomButton inverted>Add To Cart</CustomButton>     
    </div>
);

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(mapDispatchToProps)(CollectionItem);