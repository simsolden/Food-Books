import React from 'react';
import classes from '../styles/Inputs.module.css';

interface Props {
  onChangePrepTime: (event: string) => void;
}

const PrepTime: React.FC<Props> = ({ onChangePrepTime }) => {
  return (
    <>
      <h2>PRÉPARATION</h2>
      <hr />
      <div className={classes.types}>
        <div className={classes.checkbox}>
          <label>
            {'< de 20 minutes'}
            <input
              name="type"
              type="checkbox"
              value="fast"
              onChange={(event) => onChangePrepTime(event.target.value)}
            />
          </label>
        </div>
        <div className={classes.checkbox}>
          <label>
            20 à 60 minutes
            <input
              name="type"
              type="checkbox"
              value="medium"
              onChange={(event) => onChangePrepTime(event.target.value)}
            />
          </label>
        </div>
        <div className={classes.checkbox}>
          <label>
            {'> de 60 minutes'}
            <input
              name="type"
              type="checkbox"
              value="slow"
              onChange={(event) => onChangePrepTime(event.target.value)}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default PrepTime;
