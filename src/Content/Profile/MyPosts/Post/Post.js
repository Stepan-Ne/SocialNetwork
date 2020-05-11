import React from "react";
import s from './Post.module.css'
const Post = () => {
    return (
        <div className={s.item}>
            <div className={s.ava}></div>
            <div className={s.post}>
                <p>Hello!</p>
            </div>
            <div>
                <button>like</button>
                <span>10</span>
            </div>
        </div>
    );
}
export default Post;