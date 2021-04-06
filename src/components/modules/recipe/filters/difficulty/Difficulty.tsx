import React from 'react';
import classes from '../styles/Inputs.module.css';

interface Props {
  onChangeDifficulty: (event: string) => void;
}

const Difficulty: React.FC<Props> = ({ onChangeDifficulty }) => {
  return (
    <>
      <h2>DIFFICULTÉ</h2>
      <hr />
      <div className={classes.types}>
        <div className={classes.checkbox}>
          <label>
            Facile
            <input
              name="type"
              type="checkbox"
              value="easy"
              onChange={(event) => onChangeDifficulty(event.target.value)}
            />
          </label>
        </div>
        <div className={classes.checkbox}>
          <label>
            Moyen
            <input
              name="type"
              type="checkbox"
              value="medium"
              onChange={(event) => onChangeDifficulty(event.target.value)}
            />
          </label>
        </div>
        <div className={classes.checkbox}>
          <label>
            Difficile
            <input
              name="type"
              type="checkbox"
              value="hard"
              onChange={(event) => onChangeDifficulty(event.target.value)}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default Difficulty;
