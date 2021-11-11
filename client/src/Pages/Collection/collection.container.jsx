import { connect } from "react-redux";
import { compose } from 'redux';
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../Redux/ShopRedux/shopRedux.selectors";
import WithSpinner from "../../Components/With-spinner/with-spinner.component";
import CollectionPage from './collection.component';


const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = 
compose(connect(mapStateToProps),WithSpinner)(CollectionPage);

export default CollectionPageContainer;