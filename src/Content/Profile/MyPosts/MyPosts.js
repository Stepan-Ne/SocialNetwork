import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import ProfileInfo from "../ProfileInfo/ProfileInfo";



const MyPosts = (props) => {
//create link to the textarea (React works with Virtual DOM)
    //this link we connect to textarea with ref={}
    let newPostElement = React.createRef(); //textarea
    let addPost = () => {
        debugger;
        props.dispatch({type: 'ADD-POST'}); //обработчик события для элемента внутри компоненты - button
    }

    let postElements = props.postData
        .map( message => <Post message={message.message} likesCount={message.likesCount}/> );

    let newTextPost = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text}); //обработчик события в textarea
    }

    return (
        <div>

            <div className={s.profileblock}>
                <h3>My Posts</h3>

                <textarea ref={newPostElement} onChange={newTextPost} value={props.newPostText} />
                <div className={s.btn}>
                    <div>
                        <button onClick={addPost}>Add Post</button>
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