import {usersAPI} from '../Components/api/api'

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};

 const authReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };

    default:
      return state;
  }
};

const setAuthMeData = (id, email, login) => ({
  type: SET_USER_DATA,
  data: { id, email, login },
});

export const setAuthUserData = () => {
  return (dispatch) => {
    usersAPI.authMe()
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          dispatch(setAuthMeData(id, email, login));
        }
      });
  } 
}


export default authReducer;
