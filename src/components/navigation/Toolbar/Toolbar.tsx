import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

interface Props {
  isAuth: boolean;
  open: () => void;
}

const Toolbar: React.FC<Props> = ({ isAuth, open }) => {
  return (
    <header className={classes.toolbar}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <nav className={classes.desktopOnly}>
        <NavigationItems isAuthenticated={isAuth} />
      </nav>
      <DrawerToggle open={open} />
    </header>
  );
};

export default Toolbar;
