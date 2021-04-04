import React from 'react';
import classes from './styles/Toolbar.module.css';
import Logo from '../../logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import { State } from '../../../../store';
import { connect } from 'react-redux';

interface Props {
  isAuth: boolean;
}

const toolbar: React.FC<Props> = ({ isAuth }) => {
  return (
    <header className={classes.toolbar}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <nav className={classes.desktopOnly}>
        <NavigationItems isAuthenticated={isAuth} />
      </nav>
    </header>
  );
};

const mapState = (state: State) => ({
  isAuth: state.user.isAuthenticated,
});

export default connect(mapState)(toolbar);
