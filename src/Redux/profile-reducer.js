import { usersAPI, profileAPI } from '../Components/api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_MY_STATUS = 'UPDATE_MY_STATUS';
const DELETE_POST = 'DELETE_POST';

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
... state,
postData: state.postData.filter(i => i.id !== action.postId)
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
              status: action.status
          }
    default:
      return state;
  }
};

// AC
export const addPostAC = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePostAC = (postId) => ({type: DELETE_POST, postId})

const setUserProfileData = (profile) => ({ type: SET_USER_PROFILE, profile });
const setProfileStatus = (status) => ({ type: SET_STATUS, status });
const updateMyStatus = (status) => ({ type: UPDATE_MY_STATUS, status})

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
    return (dispatch => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(updateMyStatus(status))
            }
        })
    })
}

export default profileReducer;
