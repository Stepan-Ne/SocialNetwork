import React from "react";
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../img/user.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=3`)
            .then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    prev = (page) => {
        let x = --page
        this.props.prev()

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${x}&count=3`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    next = (page) => {
        let p = ++page
        this.props.next()
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=3`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return (
            <div>

                <button disabled={this.props.currentPage === 1 ? true : false}
                        onClick={() => this.prev(this.props.currentPage)}>Prev</button>
                <span> {this.props.currentPage} </span>
                <button onClick={() => this.next(this.props.currentPage)}>Next</button>

                {
                    this.props.users.map(u => <div key={u.id} className={s.userBlock}>
                        <div className={s.value}>
                            <img className={s.imgPerson} alt='logo' src={userPhoto}/>
                        </div>
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


export default Users;