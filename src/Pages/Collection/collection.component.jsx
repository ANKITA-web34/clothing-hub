import React from "react";
import { connect } from "react-redux";

import CollectionItem from '../../Components/Checkout-items/checkout-item.component';

import { selectCollections } from "../../Redux/ShopRedux/shopRedux.selectors";

import './collection.styles.scss';

const CollectionPage = ({ match }) => (
    <div className="collection-page">
        <h2>collection PAGE</h2>
    </div>
)

const mapStateToProps = ( state, ownProps) => ({
    collection: selectCollections(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);