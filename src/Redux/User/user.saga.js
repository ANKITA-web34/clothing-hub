import { takeLatest, put, all, call } from "@redux-saga/core/effects";
import { auth, createUserProfileDocument, googleProvider } from "../../firebase/firebase.utils";
import { SignInFailuer, SignInSuccess } from "./user.actions";
import UserActionTypes from "./user.types";

export function* getSnapshoptFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth)
        const userSnapshot = yield userRef.get();
        yield put(
            SignInSuccess({id: userSnapshot.id, ...userSnapshot.data()})
        );
    } catch(error) {
        yield put(SignInFailuer(error));    
    }
}

export function* signInWithGoogle() {
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshoptFromUserAuth(user);
    } catch(error) {
        yield put(SignInFailuer(error));
    }
}

export function* signInWithEmail({payload: { email, password }}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshoptFromUserAuth(user);
    } catch(error) {
        yield put(SignInFailuer(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SING_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SING_IN_START, signInWithEmail)
}

export function* userSaga() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
};