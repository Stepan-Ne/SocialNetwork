import React from "react";
import s from './MyPosts.module.css'
const MyPosts = () => {
    return (
        <div className={s.item}>
            <div>
                <div> New Post </div>
                <textarea></textarea>
                <div>
                    <button>Add Post</button>
                    <span>Like</span>
                </div>

            </div>
        </div>
    );
}

export default MyPosts;