import React from 'react';
import s from './Users.module.css';
import userPhoto from '../img/user.png';
import { NavLink } from 'react-router-dom';
import Paginator from '../Common/Paginator/Paginator';

const Users = (props) => {
  return (
    <div>
      <Paginator
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        onPageChanged={props.onPageChanged}
        loading={props.loading}
        currentPage={props.currentPage}
      />

      {props.users.map((u) => (
        <div key={u.id} className={s.userBlock}>
          <User {...u} {...props} />
        </div>
      ))}
    </div>
  );
};

const User = (props) => {
  return (
    <>
      <div className={s.value}>
        <NavLink to={'/profile/' + props.id}>
          <img className={s.imgPerson} alt='logo' src={userPhoto} />
        </NavLink>
      </div>
      <div className={s.value}>{props.name}</div>
      <FollowUnfollowButtons {...props} />
    </>
  );
};

const FollowUnfollowButtons = (props) => {
  return (
    <div>
      {props.followed ? (
        <button
          disabled={props.usersIdfollowingProgress.some(
            (uId) => uId === props.id
          )}
          onClick={() => {
            props.unfollow(props.id);
          }}
        >
          Unfollow
        </button>
      ) : (
        <button
          disabled={props.usersIdfollowingProgress.some(
            (uId) => uId === props.id
          )}
          onClick={() => {
            props.follow(props.id);
          }}
        >
          Follow
        </button>
      )}
    </div>
  );
};

export default Users;
