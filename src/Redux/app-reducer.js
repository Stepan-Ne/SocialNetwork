
import {setAuthUserData} from './auth-reducer';
const INIT_SUCCESS = 'INIT_SUCCESS';
const initial = {
    initialized: false
}

const appReducer = (state = initial, action) => {
switch (action.type) {
    case INIT_SUCCESS:
        return {
            ...state,
            initialized: true
        }

    default:
        return state;
}
};

const initAC = () => ({ type: INIT_SUCCESS});

//
export const initApp = () => dispatch => {
   let  promise = dispatch(setAuthUserData())
   Promise.all([promise])
   .then(() => dispatch(initAC()))

}

export default appReducer;