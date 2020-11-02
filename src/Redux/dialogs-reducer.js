const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };

        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id: 8, message: newMessage}]
            };

        default:
            return state;
    }
};
//New message
export const sendMessageActionCreator = () => ({type:SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});
export default dialogsReducer;