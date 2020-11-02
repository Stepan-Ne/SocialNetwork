
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const PREV_PAGE = 'PREV_PAGE';
const NEXT_PAGE = 'NEXT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const IS_FETCHING = 'IS_FETCHING';
//at first our state will be empty and we get respons from server and after that it will
//be set this state
let initialState = {
    users: [ ],
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 5,
    loading: false
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
            }
        default:
            return state;

    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const prevPageAC = () => ({type: PREV_PAGE});
export const nextPageAC = () => ({type: NEXT_PAGE});
export const setTotalUsersCountAC = (totalUsers) => ({type: SET_TOTAL_USERS_COUNT, totalUsers});
export const isFetchingAC = (loading) => ({type: IS_FETCHING, loading});

export default usersReducer;