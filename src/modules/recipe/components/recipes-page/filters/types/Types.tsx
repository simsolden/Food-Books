import React from 'react';
import classes from '../styles/Inputs.module.css';

interface Props {
  onChangeType: (event: string) => void;
}

const Types: React.FC<Props> = ({ onChangeType }) => {
  return (
    <>
      <h2>TYPES DE PLATS</h2>
      <hr />
      <div className={classes.types}>
        <div className={classes.checkbox}>
          <label>
            Apéritif
            <input
              name="type"
              type="checkbox"
              value="appetizer"
              onChange={(event) => onChangeType(event.target.value)}
            />
          </label>
        </div>
        <div className={classes.checkbox}>
          <label>
            Entrée
            <input name="type" type="checkbox" value="entry" onChange={(event) => onChangeType(event.target.value)} />
          </label>
        </div>
        <div className={classes.checkbox}>
          <label>
            Plat
            <input name="type" type="checkbox" value="meal" onChange={(event) => onChangeType(event.target.value)} />
          </label>
        </div>
        <div className={classes.checkbox}>
          <label>
            Dessert
            <input name="type" type="checkbox" value="dessert" onChange={(event) => onChangeType(event.target.value)} />
          </label>
        </div>
        <div className={classes.checkbox}>
          <label>
            Boisson
            <input name="type" type="checkbox" value="drink" onChange={(event) => onChangeType(event.target.value)} />
          </label>
        </div>
        <div className={classes.checkbox}>
          <label>
            Autre
            <input name="type" type="checkbox" value="other" onChange={(event) => onChangeType(event.target.value)} />
          </label>
        </div>
      </div>
    </>
  );
};

export default Types;
