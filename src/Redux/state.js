
let rerenderEntireTree = () => {
console.log('state changed')
}

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

export const addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export const updateNewPost = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; //observer is pettern
}


export default state;