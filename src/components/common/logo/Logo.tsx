import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
// import classes from './Logo.module.css'

interface Props {}

const Logo: React.FC<Props> = (props) => {
  return (
    <div className="">
      <NavLink to="/">
        <img src={logo} alt="Food Books logo"></img>
      </NavLink>
    </div>
  );
};

export default Logo;
