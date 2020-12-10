import React, { useState } from 'react';
import Preloader from './../Preloader/preloader';
import s from './Paginator.module.css';
import cn from 'classnames';

const Paginator = ({
  totalItemsCount,
  pageSize,
  onPageChanged,
  portionSize = 15,
  currentPage,
  loading,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  //all pages in array
  let pageNum = [];
  for (let i = 1; i <= pagesCount; i++) {
    pageNum.push(i);
  }
// all pages devided on portion
  let portionCount = pagesCount / portionSize;
  let [portionNumber, setPortionNumber] = useState(1);
  // to indicate the maximum serial number in a portion (right portion of the portion)
  let right = portionNumber * portionSize;
  let left = right - (portionSize - 1);
  
// set number of portion
  function prev() {
    if (portionNumber > 1) {
      setPortionNumber(portionNumber - 1);
    }
  }
  function next() {
    if (portionNumber < portionCount) {
      setPortionNumber(portionNumber + 1);
    }
  }

  return (
    <div className={s.btns}>
      <button onClick={prev}> PREV </button>
      {pageNum
      .filter(p => p >= left && p <= right
// if the sequence number of pages is in the range of the given portion
      ).map(p => <button
            className={ cn({[s.active] : p === currentPage})}
            onClick={() => onPageChanged(p)}
            key={p}>
            {p}
          </button>
        
      )}

      <button onClick={next}> NEXT </button>
      <Preloader loading={loading} />
    </div>
  );
};

export default Paginator;
