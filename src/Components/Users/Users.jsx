import React from "react";
import s from "./Users.module.css";
import userPhoto from "../img/user.png";
import Preloader from "../Common/Preloader/preloader";
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    return <div>

        <div className={s.btns}>
            <div>{pagesCount}</div>
            <button disabled={props.currentPage === 1 ? true : false}
                    onClick={() => props.prevPage(props.currentPage)}>Prev
            </button>
            <span> {props.currentPage} </span>
            <button onClick={() => props.nextPage(props.currentPage)}>Next</button>

            <Preloader loading={props.loading}/>
        </div>

        {
            props.users.map(u => <div key={u.id} className={s.userBlock}>
                <div className={s.value}>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={s.imgPerson} alt='logo' src={userPhoto}/>
                    </NavLink>
                </div>
                <div className={s.value}>{u.name}</div>
                <div className={s.value}>{"u.location.region"}</div>
                <div className={s.value}>{"u.location.city"}</div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Followed</button>

                    }
                </div>
                <div className={s.status}>{u.status}</div>
            </div>)
        }
    </div>
};

export default Users;