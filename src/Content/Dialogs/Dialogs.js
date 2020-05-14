import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                   <NavLink to='/dialogs/1'>Luba</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Olga</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Nicholas</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div>
                    Hi there!
                </div>
                <div>
                    How do you do
                </div>
                <div>
                    I`m fine!
                </div>
            </div>
        </div>
    );
}

export default Dialogs;