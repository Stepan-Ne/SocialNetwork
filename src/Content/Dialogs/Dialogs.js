import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem  = (props) => {
    return <div className={s.dialog}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
    return <div>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name='Luba' id='1'/>
                <DialogItem name='Olga' id='2'/>
                <DialogItem name='Nicholas' id='3'/>

            </div>
            <div className={s.messages}>
                <Message message='Hi there!'/>
                <Message message='How are you?'/>
                <Message message='Hello everybody!'/>
            </div>
        </div>
    );
}

export default Dialogs;