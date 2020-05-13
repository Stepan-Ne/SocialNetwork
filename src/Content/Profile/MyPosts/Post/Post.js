import React from "react";
import s from './Post.module.css'
const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.ava}></div>
            <div className={s.post}>
                <p>{props.message}</p>
            </div>
            <div>
                <button>like</button>
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
}
export default Post;