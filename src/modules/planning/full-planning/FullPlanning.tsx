import React from 'react';
import PlanningCard from '../planning-card/PlanningCard';
import classes from './FullPlanning.module.css';

interface Props {}

const FullPlanning: React.FC<Props> = (props) => {
  const today = new Date();

  return (
    <div className={classes.planning}>
      <PlanningCard day={today} />
      <PlanningCard day={new Date(today.getTime() + 24 * 60 * 60 * 1000)} />
      <PlanningCard day={new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000)} />
      <PlanningCard day={new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000)} />
      <PlanningCard day={new Date(today.getTime() + 4 * 24 * 60 * 60 * 1000)} />
      <PlanningCard day={new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000)} />
    </div>
  );
};

export default FullPlanning;
