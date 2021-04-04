import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './styles/NavigationItem.module.css';

interface Props {
  isLogger?: boolean;
  link: string;
  children: ReactNode;
}

const navigationItem: React.FC<Props> = ({ link, children, isLogger }) => {
  return (
    <li className={isLogger ? classes.logger : classes.navigationItem}>
      <NavLink exact activeClassName={classes.active} to={link}>
        {children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
