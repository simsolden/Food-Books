import React, { useState } from 'react';
import Types from './types/Types';
import TypeFactory from './factories/TypeFactory';
import classes from './styles/Filters.module.css';
import PrepTimeFactory from './factories/PrepTimeFactory';
import PrepTime from './prepTime/PrepTime';
import Difficulty from './difficulty/Difficulty';
import DifficultyFactory from './factories/DifficultyFactory';
import Backdrop from '../../../../../components/backdrop/Backdrop';
import Categories from './categories/Categories';

interface Props {
  show: boolean;
  closed: () => void;
}

const Filters: React.FC<Props> = ({ show, closed }) => {
  const [types] = useState(TypeFactory.create());
  const [prepTime] = useState(PrepTimeFactory.create());
  const [difficulty] = useState(DifficultyFactory.create());
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);

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

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedCategories(event.target.value as string[]);
  };

  let attachedClasses = [classes.filters, classes.close];

  if (show) {
    attachedClasses = [classes.filters, classes.open];
  }

  return (
    <>
      <Backdrop show={show} clicked={closed} />
      <div className={attachedClasses.join(' ')}>
        <Types onChangeType={handleChangeType} /> <br />
        <PrepTime onChangePrepTime={handleChangePrepTime} /> <br />
        <Difficulty onChangeDifficulty={handleChangeDifficulty} /> <br />
        <Categories selectedCategories={selectedCategories} handleChange={handleChange} />
        <button title="Appliquer les filtres" className={classes.applyFiltersButton}>
          Appliquer
        </button>
      </div>
    </>
  );
};

export default Filters;