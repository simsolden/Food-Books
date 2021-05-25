import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import classes from './Pagination.module.css';

interface Props {
  onClick: (input: number) => void;
}

const Pagination: React.FC<Props> = ({ onClick }) => {
  const pagination = useSelector((state: RootState) => state.recipe.pagination);
  let prevLinks = [];
  let nextLinks = [];

  for (let i = 1; i < pagination.currentPage; i++) {
    prevLinks.push(
      <button className={classes.paginationLink} key={i} onClick={() => onClick(i)}>
        {i}
      </button>
    );
  }

  if (pagination.next) {
    for (let i = pagination.currentPage + 1; i <= pagination.next.lastPage; i++) {
      nextLinks.push(
        <button className={classes.paginationLink} key={i} onClick={() => onClick(i)}>
          {i}
        </button>
      );
    }
  }

  if (prevLinks.length + nextLinks.length >= 6) {
    if (prevLinks.length >= 3) {
      let temp = [];

      if (nextLinks.length <= 2) {
        temp = temp = [...prevLinks.slice(undefined, 3 - nextLinks.length)];
        temp.push(<p>...</p>);
      } else {
        temp = [prevLinks[0]];
        temp[1] = <p>...</p>;
      }
      temp.push(...prevLinks.slice(-1));
      prevLinks = temp;
    }

    if (nextLinks.length >= 3) {
      let temp = [];

      if (prevLinks.length <= 2) {
        temp = temp = [...nextLinks.slice(undefined, 3 - prevLinks.length)];
        temp.push(<p>...</p>);
      } else {
        temp = [nextLinks[0]];
        temp[1] = <p>...</p>;
      }
      temp.push(...nextLinks.slice(-1));
      nextLinks = temp;
    }
  }

  return (
    <div className={classes.pagination}>
      {prevLinks}
      <p className={classes.currentPage}>{pagination.currentPage}</p>
      {nextLinks}
    </div>
  );
};

export default Pagination;
