import React from "react";
import {connect} from "react-redux";

import {
    followAC,
    setUsersAC,
    unfollowAC,
    nextPageAC,
    prevPageAC,
    setTotalUsersCountAC
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

//Container first level
class UsersContainer extends React.Component {

    componentDidMount() {
        const size = this.props.pageSize;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${size}`)
            .then(response => {
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setUsers(response.data.items)
            })
    }

    prev = (page) => {
        const size = this.props.pageSize;
        let p = --page;
        this.props.prev();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${size}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    };
    next = (page) => {
        const size = this.props.pageSize;
        let p = ++page;
        this.props.next();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${size}`)
            .then(response => {
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
                      follow={this.props.follow}/>
    }
}

//Container second level
let mapStateToProps = (state) => {
    return {users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize
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
        }
    }
}


const UsersContainerConnect = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

export default UsersContainerConnect;