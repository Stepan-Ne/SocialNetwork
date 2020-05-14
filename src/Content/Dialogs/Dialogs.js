import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Luba'},
        {id: 2, name: 'Olga'},
        {id: 3, name: 'Nicholas'}
    ]
    let dialogsElement = dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesData = [
        {id: 1, message: 'Hi there!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hello everybody!'}
    ]
    let messagesElements = messagesData.map( message => <Message message={message.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;