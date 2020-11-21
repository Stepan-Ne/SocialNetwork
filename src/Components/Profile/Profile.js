import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import { Redirect, withRouter } from "react-router-dom";
import { usersAPI } from "../api/api";
import { compose } from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";


class Profilecontainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.setUserProfile(userId);
    }

    render() {
        return (
            <div className={s.profile}>
                <ProfileInfo {...this.props}/>
                <MyPostsContainer />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};
const objectForMapDispatch = {
    setUserProfile
};


export default compose(
   // withAuthRedirect,
    connect(mapStateToProps, objectForMapDispatch),
    withRouter
)(Profilecontainer);