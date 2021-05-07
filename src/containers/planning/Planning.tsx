import React from 'react';
import FullPlanning from '../../modules/planning/full-planning/FullPlanning';
import classes from './Planning.module.css';

interface Props {}

const Planning: React.FC<Props> = (props) => {
  return (
    <div className={classes.planningPage}>
      <FullPlanning />
      <button title="Générer ma liste de course" className={classes.generateGroceriesButton}>
        Générer ma liste de course
      </button>
    </div>
  );
};

export default Planning;
