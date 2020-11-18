import {usersAPI} from '../Components/api/api'


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const IS_FETCHING = 'IS_FETCHING';
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS';

//at first our state will be empty and we get respons from server and after that it will
//be set this state
let initialState = {
    users: [ ],
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 5,
    loading: false,
    usersIdfollowingProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsers
            };
        case IS_FETCHING:
            return {
                ...state,
                loading: action.loading
            };
            case FOLLOWING_PROGRESS:
                return {
                    ...state,
                    usersIdfollowingProgress: action.isFetching
                    ? [...state.usersIdfollowingProgress, action.userFollowingProgressId]
                    : state.usersIdfollowingProgress.filter(uId => uId != action.userFollowingProgressId)
                }
        default:
            return state;

    }
};

//Action Creators

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setTotalUsersCount = (totalUsers) => ({type: SET_TOTAL_USERS_COUNT, totalUsers});
export const isFetching = (loading) => ({type: IS_FETCHING, loading});
export const followingInProgres = (userFollowingProgressId, isFetching) => ({type: FOLLOWING_PROGRESS,
     userFollowingProgressId, isFetching});

//Thunk

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(isFetching(true));
            usersAPI.getUsers(currentPage, pageSize)
                .then(response => {
                    dispatch(isFetching(false));
                    dispatch(setTotalUsersCount(response.data.totalCount));
                    dispatch(setUsers(response.data.items));
                })
    }
    
};
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(followingInProgres(userId, true));
        usersAPI.deleteUsers(userId).then((response) => {
            dispatch(followingInProgres(userId, false));
          if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
          }
        });
      }
    };
    export const follow = (userId) => {
        return (dispatch) => {
            dispatch(followingInProgres(userId, true));
          usersAPI.postUsers(userId).then((response) => {
            dispatch(followingInProgres(userId, false));
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
          });
          }
        };

export default usersReducer;