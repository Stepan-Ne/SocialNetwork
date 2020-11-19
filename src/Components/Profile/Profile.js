import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import { Redirect, withRouter } from "react-router-dom";
import { usersAPI } from "../api/api";


class Profilecontainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.setUserProfile(userId);
    }

    render() {
        //Redirect
        //if (!this.props.isAuth) return <Redirect to='/login'/>
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
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
};
const objectForMapDispatch = {
    setUserProfile
};

const WithUrlContainerComponent = withRouter(Profilecontainer)
const ProfilecontainerConnect = connect(mapStateToProps, objectForMapDispatch)(WithUrlContainerComponent);

export default ProfilecontainerConnect;