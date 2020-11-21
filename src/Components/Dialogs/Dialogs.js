import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;
    let newMessageBody = state.newMessageText;

    //update mesage
    const newMessage = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text);
        //props.dispatch(updateNewMessageTextActionCreator(text));

    };
    const sendMessage = () => {
        props.sendMessage();
    };


    //create elements on page
    let dialogsElement = state.dialogsData
        .map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElements = state.messagesData.map( message => <Message key={message.id}
        message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

            <div className={s.sendMessageBlock}>
                <div className={s.textarea}>
                    <textarea  onChange={newMessage}
                              value={newMessageBody}
                    placeholder='Enter your message'/>
                </div>
                <div className={s.sendMessage}>
                    <button onClick={sendMessage}>Send Message</button>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;