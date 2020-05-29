
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
            ]
        }
    }, //private
    _callSubscriber() {
        debugger;
        console.log('state changed')
    }, //private

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer; //observer is pettern
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
        if (action.type === 'ADD-POST') {
            debugger;
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';

            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;

            this._callSubscriber(this._state);
        }

    }

}





window.store = store;

export default store;