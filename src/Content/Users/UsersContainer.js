import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, nextPageAC, prevPageAC} from "../../Redux/users-reducer";

let mapStateToProps = (state) => {
    return {users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
    } //create attribut-props for <Users/>
};
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        prev: () => {
            dispatch(prevPageAC())
        },
        next: () => {
            dispatch(nextPageAC())
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;