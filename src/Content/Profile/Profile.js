import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQB8O1ZA6phGwj5Ao-g0VYT_6VXO8NuTQaO89kjm38x_T3EOEqG&usqp=CAU' alt='profile'/>
            </div>

            <div>
                ava + description
            </div>
            <div>
                New Post
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div>
                Posts
            </div>

        </div>
    );
}

export default Profile;