const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            state.messagesData.push({id: 8, message: newMessage});
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
}
//New message
export const sendMessageActionCreator = () => ({type:SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
export default dialogsReducer;