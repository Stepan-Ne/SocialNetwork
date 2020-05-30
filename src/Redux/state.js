const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

//store._state.dialogsPage.newMessageText;

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'How are you?', likesCount: '12'},
                {id: 2, message: 'See you!', likesCount: '8'},
                {id: 3, message: 'Hello!', likesCount: '1'}
            ],
            newPostText: 'I like JS'

        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Luba'},
                {id: 2, name: 'Olga'},
                {id: 3, name: 'Nicholas'}
            ],
            messagesData: [
                {id: 1, message: 'Hi there!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Hello everybody!'}
            ],
            newMessageText: 'I like JS'
        }
    }, //private
    _callSubscriber() {
        console.log('state changed')
    }, //private

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer; //observer is pettern, it`s equal rerender()
    },

    // _addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.postData.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // }, //change state
    // _updateNewPost(newText) {  //change state
    //     debugger;
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    dispatch(action) { //{type: 'NAME OF ACTION'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }

    }

}
//New Post
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

//New message
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

window.store = store;

export default store;