import { all, call } from 'redux-saga/effects';

import { shopSaga } from './shopRedux.sagas';
import { userSaga } from '../User/user.saga';
import { cartSaga } from '../Cart/cart.saga';

export default function* rootSaga() {
    yield all([call(shopSaga), call(userSaga), call(cartSaga)]);
};