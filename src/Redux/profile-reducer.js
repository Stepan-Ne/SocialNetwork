const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPostBody = state.newPostText;
            state.newPostText = '';
            state.postData.push({id: 5, message: newPostBody, likesCount: 0});
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
    }
    return state;
}
//New Post
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;