import React from "react";
import {connect} from "react-redux";

import {
    followAC,
    setUsersAC,
    unfollowAC,
    nextPageAC,
    prevPageAC,
    setTotalUsersCountAC, isFetchingAC
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

//Container first level
class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.isFetching(true);
        const size = this.props.pageSize;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${size}`)
            .then(response => {
                this.props.isFetching(false);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setUsers(response.data.items)
            })
    }

    prev = (page) => {
        this.props.isFetching(true);
        const size = this.props.pageSize;
        let p = --page;
        this.props.prev();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${size}`)
            .then(response => {
                this.props.isFetching(false);
                this.props.setUsers(response.data.items)
            })
    };
    next = (page) => {
        this.props.isFetching(true);
        const size = this.props.pageSize;
        let p = ++page;
        this.props.next();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${size}`)
            .then(response => {
                this.props.isFetching(false);
                this.props.setUsers(response.data.items)
            })
    };

    render() {
        return <Users prev={this.prev}
                      next={this.next}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      loading={this.props.loading}/>
    }
}

//Container second level
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        loading: state.usersPage.loading
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
        },
        setTotalUsersCount: (totalUsers) => {
            dispatch(setTotalUsersCountAC(totalUsers))
        },
        isFetching: (loading) => {
            dispatch(isFetchingAC(loading))
        }
    }
}

const UsersContainerConnect = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

export default UsersContainerConnect;