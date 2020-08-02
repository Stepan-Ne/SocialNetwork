import React from "react";
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../img/user.png';

class UsersC extends React.Component {
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }
    render() {

        return (
            <div>
                <button onClick={this.getUsers}>Get users</button>
                {
                    this.props.users.map(u => <div key={u.id} className={s.userBlock}>
                        <div className={s.value}><img alt='logo' src={userPhoto}/></div>
                        <div className={s.value}>{u.name}</div>
                        <div className={s.value}>{"u.location.region"}</div>
                        <div className={s.value}>{"u.location.city"}</div>
                        <div>
                            { u.followed
                                ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {this.props.follow(u.id)}}>Followed</button>

                            }
                        </div>
                        <div className={s.status}>{u.status}</div>
                    </div>)
                }
            </div>
        )
    }
}

export default UsersC;