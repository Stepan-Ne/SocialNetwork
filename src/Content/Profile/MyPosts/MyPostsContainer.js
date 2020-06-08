import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
       }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action); //обработчик события в textarea
    }

    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost()}
                     newPostText={state.profilePage.newPostText}
                     postData={state.profilePage.postData}/>)
}

export default MyPostsContainer;