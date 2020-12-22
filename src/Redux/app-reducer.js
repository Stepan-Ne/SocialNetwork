import { setAuthUserData } from './auth-reducer';
const INIT_SUCCESS = 'INIT_SUCCESS';
const ON_ERROR = 'ON_ERROR';
const OFF_ERROR = 'OFF_ERROR';

const initial = {
  initialized: false,
  unhandledError: '',
};

const appReducer = (state = initial, action) => {
  switch (action.type) {
    case INIT_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    case ON_ERROR:
      return {
        ...state,
        unhandledError: action.textError
      };
      case OFF_ERROR:
          return {
              ...state,
            unhandledError: null
          }

    default:
      return state;
  }
};

const initAC = () => ({ type: INIT_SUCCESS });
const onErrorAC = (textError) => ({ type: ON_ERROR, textError });
const offError = () => ({ type: OFF_ERROR });

//
export const initApp = () => (dispatch) => {
  let promise = dispatch(setAuthUserData());
  Promise.all([promise]).then(() => dispatch(initAC()));
};

export const unhandledErrorThunk = (textError) => (dispatch) => {
  dispatch(onErrorAC(textError));
  debugger
  setTimeout(() => {
    dispatch(offError());
  }, 3000);
};

export default appReducer;
