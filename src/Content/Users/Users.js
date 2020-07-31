import React from "react";
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../img/user.png';

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })

        // props.setUsers([
        //     {name: 'Andrew', followed: true, id: 1, status: 'I like JS', location: {region: 'MS', city: 'Moscow'} },
        //     {name: 'Mike', followed: false, id: 2, status: 'I learn Python', location: {region: 'LS', city: 'St-Petersburg'} },
        //     {name: 'Helen', followed: true, id: 3, status: 'I use React/Redux', location: {region: 'TR', city: 'Kazan'}},
        //     {name: 'Lusy', followed: false, id: 4, status: 'I learn PHP', location: {region: 'VS', city: 'Volgograd'}},
        // ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id} className={s.userBlock}>
                <div className={s.value}><img alt='logo' src={userPhoto}/></div>
                <div className={s.value}>{u.name}</div>
                <div className={s.value}>{"u.location.region"}</div>
                <div className={s.value}>{"u.location.city"}</div>
                <div>
                    { u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Followed</button>

                    }
                </div>
                <div className={s.status}>{u.status}</div>
            </div>)
        }
    </div>
}

export default Users;