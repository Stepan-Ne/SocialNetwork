import React from "react";
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Luba
                </div>
                <div className={s.dialog}>
                    Olga
                </div>
                <div className={s.dialog}>
                    Nicholas
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