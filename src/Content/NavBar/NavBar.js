import React from "react";
import s from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={s.navbar}>

            <div className={s.itemMenu}>

                <div className={s.item}>
                    <a href='/profile'>Profile</a>
                </div>
                <div className={s.item}>
                    <a href='/dialogs'>Messages</a>
                </div>
                <div className={s.item}>
                    <a href='/news'>News</a>
                </div>
                <div className={s.item}>
                    <a href='/settings'>Settings</a>
                </div>
            </div>

        </div>
    );
}

export default NavBar;