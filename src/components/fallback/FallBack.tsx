import React from 'react';
import classes from './Fallback.module.css';

interface Props {}

const FallBack: React.FC<Props> = (props) => {
  return (
    <div className={classes.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default FallBack;
