const SEND_MESSAGE = 'ADD-MESSAGE';

let initialState = {
  dialogsData: [
    { id: 1, name: 'Luba' },
    { id: 2, name: 'Olga' },
    { id: 3, name: 'Nicholas' },
  ],
  messagesData: [
    { id: 1, message: 'Hi there!' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Hello everybody!' },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = action.newMessageBody;
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: Date.now(), message: newMessage },
        ],
      };

    default:
      return state;
  }
};

// AC
export const sendMessageAC = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
