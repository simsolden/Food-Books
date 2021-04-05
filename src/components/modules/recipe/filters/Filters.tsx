import React, { useState } from 'react';
import Types from './types/Types';
import TypeFactory from './factories/TypeFactory';
import classes from './styles/Filters.module.css';

interface Props {}

const Filters: React.FC<Props> = (props) => {
  const [types] = useState(TypeFactory.create());

  const handleInputChange = (event: string) => {
    // @ts-ignore
    types[event] = !types[event];
  };

  return (
    <div className={classes.filters}>
      <Types onChangeType={handleInputChange} /> <br /> catégories <br /> préparation <br /> difficulté
    </div>
  );
};

export default Filters;
