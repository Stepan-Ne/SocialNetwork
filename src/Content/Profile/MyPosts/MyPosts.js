import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import ProfileInfo from "../ProfileInfo/ProfileInfo";



const MyPosts = () => {
    return (
        <div>

            <div className={s.profileblock}>
                <h3>My Posts</h3>
                <textarea></textarea>
                <div className={s.btn}>
                    <div>
                        <button>Add Post</button>
                    </div>

                    <div>
                        <span>Like</span>
                    </div>

                </div>
            </div>
            <div className={s.posts}>
                <Post message='How are you?' likesCount='12'/>
                <Post message='See you!' likesCount='8' />
            </div>
        </div>
    );
}

export default MyPosts;