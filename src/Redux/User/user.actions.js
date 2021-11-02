import UserActionTypes from './user.types'

/*.................................................*/

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SING_IN_START
});

export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SING_IN_START,
    payload: emailAndPassword
});

export const SignInSuccess = user => ({
    type: UserActionTypes.SING_IN_SUCCESS,
    payload: user
});

export const SignInFailuer = error => ({
    type: UserActionTypes.SING_IN_FAILURE,
    payload: error
});

/*............................................... */


