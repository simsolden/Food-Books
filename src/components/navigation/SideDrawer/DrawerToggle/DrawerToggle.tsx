import React from 'react';
import classes from './DrawerToggle.module.css';

interface Props {
  open: () => void;
}

const DrawerToggle: React.FC<Props> = ({ open }) => {
  return (
    <div className={classes.drawerToggle} onClick={open}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
