import { put,all, call, takeLatest } from 'redux-saga/effects';
import UserActionTypes from '../User/user.types';
import { clearCart } from './cart.actions';

export function* clearCartOnsignOut() {
    yield put(clearCart());
};

export function* OnSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnsignOut)
};

export function* cartSaga() {
    yield all([call(OnSignOutSuccess)])
};