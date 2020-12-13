import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { connect } from 'react-redux';
import {
  setUserProfile,
  setStatus,
  updateStatus,
  setImageProfile,
} from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class Profilecontainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }
    this.props.setUserProfile(userId);
    this.props.setStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <div className={s.profile}>
        <ProfileInfo
          {...this.props}
          isOwner={!this.props.match.params.userId}
        />
        <MyPostsContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.id,
  };
};
const objectForMapDispatch = {
  setUserProfile,
  setStatus,
  updateStatus,
  setImageProfile,
};

export default compose(
  // withAuthRedirect,
  withRouter,
  connect(mapStateToProps, objectForMapDispatch)
)(Profilecontainer);
