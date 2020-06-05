import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";

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
            newMessageText: ''
        },
        sidebar: {}
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

    dispatch(action) { //action = {type: 'NAME OF ACTION'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sideBarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}


window.store = store;

export default store;