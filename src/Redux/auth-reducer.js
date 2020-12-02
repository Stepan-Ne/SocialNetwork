import { stopSubmit } from 'redux-form';
import { usersAPI, authAPI } from '../Components/api/api';

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        //isAuth: true
      };

    default:
      return state;
  }
};

const setAuthMeData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { id, email, login, isAuth },
});

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

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.logIn(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        authAPI.authMe().then((response) => {
          if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            dispatch(setAuthMeData(id, email, login, true));
          }
        });
      } else {
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

export default authReducer;
