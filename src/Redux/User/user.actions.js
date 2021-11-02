import UserActionTypes from './user.types'

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
});

/*.................................................*/

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SING_IN_START
});

export const googleSignInSuccess = user => ({
    type: UserActionTypes.GOOGLE_SING_IN_SUCCESS,
    payload: user
});

export const googleSignInFailuer = error => ({
    type: UserActionTypes.GOOGLE_SING_IN_FAILURE,
    payload: error
});

/*............................................... */

export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SING_IN_START,
    payload: emailAndPassword
});

export const emailSignInSuccess = user => ({
    type: UserActionTypes.EMAIL_SING_IN_SUCCESS,
    payload: user
});

export const emailSignInFailuer = error => ({
    type: UserActionTypes.EMAIL_SING_IN_FAILURE,
    payload: error
});

