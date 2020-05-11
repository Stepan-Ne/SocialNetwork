import React from "react";
import s from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={s.navbar}>

            <div className={s.item}>
                <div>
                    <a href='#'>Profile</a>
                </div>
                <div>
                    <a href='#'>Messages</a>
                </div>
                <div>
                    <a href='#'>News</a>
                </div>
                <div>
                    <a href='#'>Settings</a>
                </div>
            </div>

        </div>
    );
}

export default NavBar;