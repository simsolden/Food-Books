import React, { useState } from 'react';
import Types from './types/Types';
import TypeFactory from './factories/TypeFactory';
import classes from './styles/Filters.module.css';
import PrepTimeFactory from './factories/PrepTimeFactory';
import PrepTime from './prepTime/PrepTime';
import Difficulty from './difficulty/Difficulty';
import DifficultyFactory from './factories/DifficultyFactory';

interface Props {}

const Filters: React.FC<Props> = (props) => {
  const [types] = useState(TypeFactory.create());
  const [prepTime] = useState(PrepTimeFactory.create());
  const [difficulty] = useState(DifficultyFactory.create());

  const handleChangeType = (event: string) => {
    // @ts-ignore
    types[event] = !types[event];
  };

  const handleChangePrepTime = (event: string) => {
    // @ts-ignore
    prepTime[event] = !prepTime[event];
  };

  const handleChangeDifficulty = (event: string) => {
    // @ts-ignore
    difficulty[event] = !difficulty[event];
  };

  return (
    <div className={classes.filters}>
      <Types onChangeType={handleChangeType} /> <br />
      <PrepTime onChangePrepTime={handleChangePrepTime} /> <br />
      <Difficulty onChangeDifficulty={handleChangeDifficulty} /> <br />
      <h2>CATÉGORIES</h2> <hr />
    </div>
  );
};

export default Filters;
