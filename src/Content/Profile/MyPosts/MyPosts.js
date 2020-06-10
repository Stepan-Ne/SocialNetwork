import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";



const MyPosts = (props) => {
//create link to the textarea (React works with Virtual DOM)
    //this link we connect to textarea with ref={}
    let newPostElement = React.createRef(); //textarea
    let newTextPost = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text); //call-back

    }

    let onAddPost = () => {
        props.addPost();
    }

    let postElements = props.postData
        .map( message => <Post message={message.message} likesCount={message.likesCount}/> );

    return (
        <div>

            <div className={s.profileblock}>
                <h3>My Posts</h3>

                <textarea ref={newPostElement} onChange={newTextPost} value={props.newPostText} />
                <div className={s.btn}>
                    <div>
                        <button onClick={onAddPost}>Add Post</button>
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