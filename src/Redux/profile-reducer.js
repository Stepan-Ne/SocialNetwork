import { stopSubmit } from 'redux-form';
import { usersAPI, profileAPI } from '../Components/api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_MY_STATUS = 'UPDATE_MY_STATUS';
const DELETE_POST = 'DELETE_POST';
const UPDATE_MY_IMAGE = 'UPDATE_MY_IMAGE';
//const SET_CONTACTS_DATA = 'SET_CONTACTS_DATA';

let initialState = {
  // app
  postData: [
    { id: 1, message: 'How are you?', likesCount: '12' },
    { id: 2, message: 'See you!', likesCount: '8' },
    { id: 3, message: 'Hello!', likesCount: '1' },
  ],
  // back
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postData: [
          ...state.postData,
          { id: Date.now(), message: action.newPostText, likesCount: 0 },
        ],
      };
    case DELETE_POST:
      return {
        ...state,
        postData: state.postData.filter((i) => i.id !== action.postId),
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case UPDATE_MY_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case UPDATE_MY_IMAGE:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    default:
      return state;
  }
};

// AC
export const addPostAC = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePostAC = (postId) => ({ type: DELETE_POST, postId });

const setUserProfileData = (profile) => ({ type: SET_USER_PROFILE, profile });
const setProfileStatus = (status) => ({ type: SET_STATUS, status });
const updateMyStatus = (status) => ({ type: UPDATE_MY_STATUS, status });
const setImageProfileSuccess = (photos) => ({ type: UPDATE_MY_IMAGE, photos });
//const setContatcsAC = (contactsData) => ({type: SET_CONTACTS_DATA, contactsData})

// Thunk
export const setUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfileData(response.data));
    });
  };
};

export const setStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setProfileStatus(response.data));
    });
  };
};
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(updateMyStatus(status));
      }
    });
  };
};

export const setImageProfile = (file) => (dispatch) => {
  //dispatch(updateImageAC(file))
  profileAPI.updateImage(file).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setImageProfileSuccess(response.data.data.photos));
    }
  });
};

export const setContacts = (value) => (dispatch, getState) => {
const userId = getState().auth.id

  return profileAPI.saveContacts(value).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setUserProfile(userId))
    } else {
      let message = response.data.messages.length > 0
      ? response.data.messages[0]
      : 'Some error'
      dispatch(stopSubmit('contacts', {_error: message}))
      return Promise.reject()
    }
  })
}
export default profileReducer;
