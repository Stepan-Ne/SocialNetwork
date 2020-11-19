import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  return (
    <div className={s.header}>
      <img alt='logo' />
      <div className={s.txt}>Header</div>
      <div className={s.loginBlock}>
        <div>
          {props.isAuth 
          ? props.login
          : <NavLink to='/ogin'> Login </NavLink>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
