import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageTextActionCreator} from "../../Redux/state";




const Dialogs = (props) => {

    let newMessageElement = React.createRef(); //textarea

    let newMessage = () => {
        let text =  newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));

    }


    let dialogsElement = props.state.dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);


    let messagesElements = props.state.messagesData.map( message => <Message message={message.message}/>);
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
                    <textarea ref={newMessageElement} onChange={newMessage}
                              value={props.state.newMessageText}/>
                </div>
                <div className={s.sendMessage}>
                    <button>Send Message</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;