import { usersAPI, profileAPI } from '../Components/api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_MY_STATUS = 'UPDATE_MY_STATUS';

let initialState = {
  // app
  postData: [
    { id: 1, message: 'How are you?', likesCount: '12' },
    { id: 2, message: 'See you!', likesCount: '8' },
    { id: 3, message: 'Hello!', likesCount: '1' },
  ],
  newPostText: 'I like JS',
  // back
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPostBody = state.newPostText;
      //пришел новый стейт при вводе, но мы не имеем права менять объект
      //connect сравнивает не объекты, а их содерживое - развернуть объект
      //и создать его копию
      return {
        ...state,
        newPostText: '',
        postData: [
          ...state.postData,
          { id: 5, message: newPostBody, likesCount: 0 },
        ],
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
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
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
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
