import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";


class Profilecontainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
}
const objectForMapDispatch = {
    setUserProfile
}

const ProfilecontainerConnect = connect(mapStateToProps, objectForMapDispatch)(Profilecontainer);

export default ProfilecontainerConnect;