import { takeLatest, put, all, call } from "@redux-saga/core/effects";
import { auth, createUserProfileDocument, getCurrentUser, googleProvider } from "../../firebase/firebase.utils";
import { SignInFailuer, SignInSuccess, signOutSuccess, signOutFailure} from "./user.actions";
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
};


/*..................................................... */

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshoptFromUserAuth(userAuth);
    } catch(error) {
        yield put(SignInFailuer(error))
    }
};

/*..................................................... */

export function* signInWithGoogle() {
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshoptFromUserAuth(user);
    } catch(error) {
        yield put(SignInFailuer(error));
    }
};

export function* signInWithEmail({payload: { email, password }}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshoptFromUserAuth(user);
    } catch(error) {
        yield put(SignInFailuer(error))
    }
};

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch(error) {
        yield put(signOutFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
};



export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
};

/*..................................................... */

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
};

export function* OnSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}


export function* userSaga() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(OnSignOutStart),
    ]);
};