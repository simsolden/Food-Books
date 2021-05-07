import React from 'react';
import PlanningCard from '../planning-card/PlanningCard';
import classes from './FullPlanning.module.css'

interface Props {}

const FullPlanning: React.FC<Props> = (props) => {
  return (
    <div className={classes.planning}>
      <PlanningCard />
      <PlanningCard />
      <PlanningCard />
      <PlanningCard />
      <PlanningCard />
      <PlanningCard />
    </div>
  );
};

export default FullPlanning;
