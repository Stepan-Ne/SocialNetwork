import React from 'react';
import s from './Users.module.css';
import userPhoto from '../img/user.png';
import Preloader from '../Common/Preloader/preloader';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../api/api';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  return (
    <div>
      <div className={s.btns}>
        <div>{pagesCount}</div>
        <button
          disabled={props.currentPage === 1 ? true : false}
          onClick={() => props.prevPage(props.currentPage)}
        >
          Prev
        </button>
        <span> {props.currentPage} </span>
        <button onClick={() => props.nextPage(props.currentPage)}>Next</button>

        <Preloader loading={props.loading} />
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
          <div className={s.value}></div>
          <div className={s.value}>{'u.location.city'}</div>
          <FollowUnfollowButtons {...props}/>
          <div className={s.status}>!!!{props.status}</div>
    </>
};

const FollowUnfollowButtons = (props) => {

    return <div>
    {props.followed ? (
      <button disabled={props.usersIdfollowingProgress.some(uId => uId === props.id)}
        onClick={() => {
            props.followingInProgres(props.id, true);
          usersAPI.deleteUsers(props.id).then((response) => {
            props.followingInProgres(props.id, false);
            if (response.data.resultCode === 0) {
              props.unfollow(props.id);
            }
          });
        }}
      >
        Unfollow
      </button>
    ) : (
      <button disabled={props.usersIdfollowingProgress.some(uId => uId === props.id)}
    
        onClick={() => {
        
            props.followingInProgres(props.id, true);
          usersAPI.postUsers(props.id).then((response) => {
            props.followingInProgres(props.id, false);
            if (response.data.resultCode === 0) {
              props.follow(props.id);
            }
          });
        }}
      >
        Follow
      </button>
    )}
  </div>
}

export default Users;

