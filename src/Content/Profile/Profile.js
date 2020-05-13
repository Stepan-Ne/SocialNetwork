import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTlqDc74BqwsX0lyiMzvC3D2_rljyRiczzYFTAb40PSAM2NIV6&usqp=CAU' alt='profile'/>
            </div>

            <div>
                ava + description
            </div>
            <MyPosts/>
            <Post message='How are you?' likesCount='12'/>
            <Post message='See you!' likesCount='8' />


        </div>
    );
}

export default Profile;