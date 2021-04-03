import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './styles/NavigationItem.module.css';

interface Props {
  link: string;
  children: ReactNode;
}

const navigationItem: React.FC<Props> = ({ link, children }) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink exact activeClassName={classes.active} to={link}>
        {children}
      </NavLink>
    </li>
  );
};

export default navigationItem;