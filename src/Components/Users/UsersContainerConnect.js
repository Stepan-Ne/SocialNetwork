import React from "react";
import {connect} from "react-redux";

import {
    follow,
    setUsers,
    unfollow,
    nextPage,
    prevPage,
    setTotalUsersCount, isFetching
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import {usersAPI} from '../api/api';

//Container first level
class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.isFetching(true);
        const size = this.props.pageSize;
        usersAPI.getUsers(this.props.currentPage, size)
            .then(response => {
                this.props.isFetching(false);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setUsers(response.data.items)
            })
    }

    prevPage = (page) => {
        this.props.isFetching(true);
        const size = this.props.pageSize;
        let p = --page;
        this.props.prevPage();
        usersAPI.getUsers(p, size)
            .then(response => {
                this.props.isFetching(false);
                this.props.setUsers(response.data.items)
            })
    };
    nextPage = (page) => {
        this.props.isFetching(true);
        const size = this.props.pageSize;
        let p = ++page;
        this.props.nextPage();
        usersAPI.getUsers(p, size)
            .then(response => {
                this.props.isFetching(false);
                this.props.setUsers(response.data.items)
            })

    };

    render() {
        return <Users prevPage={this.prevPage}
                      nextPage={this.nextPage}
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
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        loading: state.usersPage.loading
    }
};

const objectForMapDispatch = {
    follow,
    setUsers,
    unfollow,
    nextPage,
    prevPage,
    setTotalUsersCount,
    isFetching
};

const UsersContainerConnect = connect(mapStateToProps, objectForMapDispatch)(UsersContainer);

export default UsersContainerConnect;