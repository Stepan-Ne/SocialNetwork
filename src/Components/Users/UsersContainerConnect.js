import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  unfollow,
  setCurrentPage,
  getUsers,
} from '../../Redux/users-reducer';
import Users from './Users';


//Container first level
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged(pageNumber) {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }
  render() {
    return (
      <Users
        onPageChanged={this.onPageChanged.bind(this)}
        usersIdfollowingProgress={this.props.usersIdfollowingProgress}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        loading={this.props.loading}
      />
    );
  }
}

//Container second level
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    loading: state.usersPage.loading,
    usersIdfollowingProgress: state.usersPage.usersIdfollowingProgress,
  };
};

const objectForMapDispatch = {
  follow,
  unfollow,
  setCurrentPage,
  getUsers,
};

const UsersContainerConnect = connect(
  mapStateToProps,
  objectForMapDispatch
)(UsersContainer);

export default UsersContainerConnect;
