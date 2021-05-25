import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRematchDispatch } from '../../hooks/useRematchDispatch';
import PlanningCard from '../../modules/planning/components/planning-card/PlanningCard';
import { getWeekDay } from '../../modules/planning/utils/getWeekDay';
import { RootState, Dispatch } from '../../store';
import classes from './Planning.module.css';

interface Props {}

const Planning: React.FC<Props> = (props) => {
  const planningRecipes = useSelector((state: RootState) => state.planning.planning);
  const fetchPlanning = useRematchDispatch((dispatch: Dispatch) => dispatch.planning.fetchPlanning);

  useEffect(() => {
    fetchPlanning();
  }, [fetchPlanning]);

  let planning = [];

  for (let i = 0; i < 6; i++) {
    planning.push(<PlanningCard key={i} day={getWeekDay(i)} recipes={planningRecipes} />);
  }

  return (
    <div className={classes.planningPage}>
      <div className={classes.planning}>{planning}</div>;
    </div>
  );
};

export default Planning;
