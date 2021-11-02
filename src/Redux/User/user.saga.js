import { takeLatest, put, all, call } from "@redux-saga/core/effects";
import { auth, createUserProfileDocument, googleProvider } from "../../firebase/firebase.utils";
import { googleSignInFailuer, googleSignInSuccess } from "./user.actions";
import UserActionTypes from "./user.types";

export function* signInWithGoogle() {
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user)
        const userSnapshot = yield userRef.get();
        yield put(
            googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()})
        );
    } catch(error) {
        yield put(googleSignInFailuer(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SING_IN_START, signInWithGoogle)
}

export function* userSaga() {
    yield all([call(onGoogleSignInStart)])
};