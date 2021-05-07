import React from 'react';
import classes from './Backdrop.module.css';

interface Props {
  show: boolean;
  clicked: () => void;
  children?: React.ReactNode;
}

const Backdrop: React.FC<Props> = ({ show, clicked, children }) => {
  return show ? (
    <div className={classes.backdrop} onClick={clicked}>
      {children}
    </div>
  ) : null;
};

export default Backdrop;
