import React from 'react';
import Preloader from './../Preloader/preloader';
import s from './Paginator.module.css';

const Paginator = ({totalUsersCount, pageSize, onPageChanged, loading}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pageNum = []
    for (let i = 1; i <= pagesCount / 100; i++) {
      pageNum.push(i)
    }

    return <div className={s.btns}>
    {pageNum.map(p => <button onClick={() => onPageChanged(p)} key={p}>{p}</button>)}
    <div><Preloader loading={loading} /></div>
    </div>
}

export default Paginator;