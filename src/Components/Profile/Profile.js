import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import { withRouter } from "react-router-dom";


class Profilecontainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
               this.props.setUserProfile(response.data)
            })
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

const WithUrlContainerComponent = withRouter(Profilecontainer)
const ProfilecontainerConnect = connect(mapStateToProps, objectForMapDispatch)(WithUrlContainerComponent);

export default ProfilecontainerConnect;