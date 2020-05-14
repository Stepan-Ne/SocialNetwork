import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import ProfileInfo from "../ProfileInfo/ProfileInfo";



const MyPosts = () => {
    let postData = [
        {id: 1, message: 'How are you?', likesCount: '12'},
        {id: 2, message: 'See you!', likesCount: '8'}
    ]
    let postElements = postData
        .map( message => <Post message={message.message} likesCount={message.likesCount}/> )
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
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;