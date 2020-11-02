import React from "react";
import s from "./Users.module.css";
import userPhoto from "../img/user.png";
import Preloader from "../Common/Preloader/preloader";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    return <div>
        <div>{pagesCount}</div>

        <div>
            <button disabled={props.currentPage === 1 ? true : false}
                    onClick={() => props.prev(props.currentPage)}>Prev
            </button>
            <span> {props.currentPage} </span>
            <button onClick={() => props.next(props.currentPage)}>Next</button>
        </div>

        <Preloader loading={props.loading}/>

        {
            props.users.map(u => <div key={u.id} className={s.userBlock}>
                <div className={s.value}>
                    <img className={s.imgPerson} alt='logo' src={userPhoto}/>
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