import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/state";




const Dialogs = (props) => {

    //update mesage
    let newMessage = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));

    }
    //send message
    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }


    //create elements on page
    let dialogsElement = props.state.dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.messagesData.map( message => <Message
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
                              value={props.state.newMessageText}
                    placeholder='Enter your message'/>
                </div>
                <div className={s.sendMessage}>
                    <button onClick={sendMessage}>Send Message</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;