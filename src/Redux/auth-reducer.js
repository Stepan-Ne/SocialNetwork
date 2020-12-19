import { stopSubmit } from 'redux-form';
import { usersAPI, authAPI } from '../Components/api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const CAPTCHA_URL = 'CAPTCHA_URL';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaURL: null
};

// REDUCER
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        //isAuth: true
      };
      case CAPTCHA_URL:
        return {
          ...state,
          ...action.data
        }

    default:
      return state;
  }
};

// AC
const setAuthMeData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { id, email, login, isAuth },
});

const captchaURLSuccess = (captchaURL) => ({type: CAPTCHA_URL, data: {captchaURL}})

// THUNK
//if I autorized give me my data: id, email, login 
export const setAuthUserData = () => {
  return (dispatch) => {
    return authAPI.authMe().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthMeData(id, email, login, true));
      }
    });
  };
};

export const login = (email, password, rememberMe, captcha) => {
  return (dispatch) => {
    authAPI.logIn(email, password, rememberMe, captcha).then((response) => {
      if (response.data.resultCode === 0) {
        authAPI.authMe().then((response) => {
          if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            dispatch(setAuthMeData(id, email, login, true));
          }
        });
      } else {
        if (response.data.resultCode === 10) {
          dispatch(getCaptchaURL())
        }
        let message =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : 'Some error';
        dispatch(stopSubmit('login', { _error: message }));
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logOut().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthMeData(null, null, null, false));
      }
    });
  };
};

export const getCaptchaURL = () => async(dispatch) => {

 const response = await authAPI.getCaptcha()
  
  dispatch(captchaURLSuccess(response.data.url))

}

export default authReducer;
