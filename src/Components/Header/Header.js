import React from "react";
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <img alt='logo'/>
            <div className={s.txt}>Header</div>
        </div>

    );
}

export default Header;