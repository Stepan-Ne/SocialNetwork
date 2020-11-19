import React from 'react';
import s from './Users.module.css';
import userPhoto from '../img/user.png';
import Preloader from '../Common/Preloader/preloader';
import { NavLink } from 'react-router-dom';



const Users = (props) => {
  
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pageNum = []
  for (let i = 1; i <= pagesCount / 100; i++) {
    pageNum.push(i)
  }
  return (
    <div>
      <div className={s.btns}>
      {pageNum.map(p => <button onClick={() => props.onPageChanged(p)} key={p}>{p}</button>)}
      <div><Preloader loading={props.loading} /></div>
      </div>
      
      {props.users.map((u) => (
        <div key={u.id} className={s.userBlock}>
             <User {...u} {...props}/>
          
        </div>
      ))}
    </div>
  );
};

const User = (props) => {
    return <> 
<div className={s.value}>
            <NavLink to={'/profile/' + props.id}>
              <img className={s.imgPerson} alt='logo' src={userPhoto} />
            </NavLink>
          </div>
          <div className={s.value}>{props.name}</div>
          <FollowUnfollowButtons {...props}/>
    </>
};

const FollowUnfollowButtons = (props) => {

    return <div>
    {props.followed ? (
      <button disabled={props.usersIdfollowingProgress.some(uId => uId === props.id)}
        onClick={() => {
          props.unfollow(props.id);
        }}
      >Unfollow</button>
    ) : (
      <button disabled={props.usersIdfollowingProgress.some(uId => uId === props.id)}
        onClick={() => {
          props.follow(props.id);
        }}
      >Follow</button>
    )}
  </div>
}

export default Users;

