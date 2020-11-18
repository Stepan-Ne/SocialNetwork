import {usersAPI} from '../Components/api/api'


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const PREV_PAGE = 'PREV_PAGE';
const NEXT_PAGE = 'NEXT_PAGE';
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
        case PREV_PAGE:
             if (state.currentPage > 1) {
                return {
                    ...state,
                    currentPage: --state.currentPage,
                }
            };
        case NEXT_PAGE:
            return {
                ...state,
                currentPage: ++state.currentPage,
                disabled: false
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

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const prevPage = () => ({type: PREV_PAGE});
export const nextPage = () => ({type: NEXT_PAGE});
export const setTotalUsersCount = (totalUsers) => ({type: SET_TOTAL_USERS_COUNT, totalUsers});
export const isFetching = (loading) => ({type: IS_FETCHING, loading});
export const followingInProgres = (userFollowingProgressId, isFetching) => ({type: FOLLOWING_PROGRESS,
     userFollowingProgressId, isFetching});

//Thunk

export const thunkUsersCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(isFetching(true));
            usersAPI.getUsers(currentPage, pageSize)
                .then(response => {
                    dispatch(isFetching(false));
                    dispatch(setTotalUsersCount(response.data.totalCount));
                    dispatch(setUsers(response.data.items));
                })
    }
    
} 
export default usersReducer;