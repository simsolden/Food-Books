import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useRematchDispatch } from '../../hooks/useRematchDispatch';
import PlanningCard from '../../modules/planning/components/planning-card/PlanningCard';
import HelpIcon from '@material-ui/icons/Help';
import { getWeekDay } from '../../modules/planning/utils/getWeekDay';
import { RootState, Dispatch } from '../../store';
import classes from './Planning.module.css';

interface Props {}

const Planning: React.FC<Props> = () => {
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
      {!planningRecipes.length && (
        <div className={classes.noPlanning}>
          <HelpIcon className={classes.helpIcon} />
          <p>
            Vous pouvez ajoutez des recettes au planning via <Link to="mes-recettes?page=1">Mes recettes</Link> ou la
            section <Link to="decouvrir?page=1">Découvrir</Link>
          </p>
        </div>
      )}
      <div className={classes.planning}>{planning}</div>;
    </div>
  );
};

export default Planning;
