import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-white.png';
import classes from './Logo.module.css';

interface Props {}

const Logo: React.FC<Props> = () => {
  return (
    <div className={classes.logo}>
      <NavLink to="/">
        <img src={logo} alt="Food Books logo"></img>
      </NavLink>
    </div>
  );
};

export default Logo;
