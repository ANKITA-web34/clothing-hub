import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './User/user.reducer';
import cartReducer from './Cart/card.reducer';
import directoryReducer from './DirectoryRedux/directory.reducer';
import shopReducer from './ShopRedux/shopRedux.reducer';

const persistConfig = {
    key: 'root', 
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers ({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);