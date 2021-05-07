import React, { Fragment } from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../backdrop/Backdrop';
import Logo from '../../logo/Logo';

interface Props {
  show: boolean;
  isAuth: boolean;
  closed: () => void;
}

const SideDrawer: React.FC<Props> = ({ show, closed, isAuth }) => {
  let attachedClasses = [classes.sideDrawer, classes.close];

  if (show) {
    attachedClasses = [classes.sideDrawer, classes.open];
  }

  return (
    <>
      <Backdrop show={show} clicked={closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.logo} onClick={closed}>
          <Logo />
        </div>
        <nav onClick={closed}>
          <NavigationItems isAuthenticated={isAuth} />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
