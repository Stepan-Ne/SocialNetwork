import {rerenderEntireTree} from "../render";

let state = {

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

}
window.state = state;

export let addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export let updateNewPost = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export default state;