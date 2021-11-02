import  UserActionTypes  from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = ( state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SING_IN_SUCCESS:
        case UserActionTypes.SING_IN_FAILURE:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case UserActionTypes.SING_IN_SUCCESS:
        case UserActionTypes.SING_IN_FAILURE:
            return {
                ...state,
                error: action.payload
            }    
        default: 
           return state;    
    }
};

export default userReducer;