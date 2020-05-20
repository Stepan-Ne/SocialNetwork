import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'How are you?', likesCount: '12'},
            {id: 2, message: 'See you!', likesCount: '8'},
            {id: 3, message: 'Hello!', likesCount: '1'}
        ]
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
export let addPost = (post) => {

    let newPost = {
        id: 5,
        message: post,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
}


export default state;