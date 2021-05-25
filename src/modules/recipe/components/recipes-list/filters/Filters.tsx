import React, { FormEvent, useEffect, useState } from 'react';
import Types from './types/Types';
import TypeFactory from './factories/TypeFactory';
import classes from './styles/Filters.module.css';
import PrepTimeFactory from './factories/PrepTimeFactory';
import PrepTime from './prepTime/PrepTime';
import Difficulty from './difficulty/Difficulty';
import DifficultyFactory from './factories/DifficultyFactory';
import Backdrop from '../../../../../components/backdrop/Backdrop';
import Categories from './categories/Categories';
import { useSelector } from 'react-redux';
import { Dispatch, RootState } from '../../../../../store';
import { useRematchDispatch } from '../../../../../hooks/useRematchDispatch';
import { useHistory, useLocation } from 'react-router-dom';
import { createRequestUrl } from '../../../utils/createRequestUrl';

interface Props {
  show: boolean;
  closed: () => void;
}

const Filters: React.FC<Props> = ({ show, closed }) => {
  const categories = useSelector((state: RootState) => state.recipe.categories);
  const title = useSelector((state: RootState) => state.recipe.title);
  const { setPagination, setFilters, fetchRecipes, fetchUserRecipe } = useRematchDispatch((dispatch: Dispatch) => ({
    setPagination: dispatch.recipe.setPagination,
    setFilters: dispatch.recipe.setFilters,
    fetchUserRecipe: dispatch.recipe.fetchUserRecipes,
    fetchRecipes: dispatch.recipe.fetchRecipes,
  }));
  const [types] = useState(TypeFactory.create());
  const [prepTime] = useState(PrepTimeFactory.create());
  const [difficulty] = useState(DifficultyFactory.create());
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    return () => {
      setFilters({
        difficulty: [],
        categories: [],
        prepTime: [],
        types: [],
      });
    };
  });

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

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const categoriesIds = categories
      .filter((category) => selectedCategories.includes(category.title))
      .map((category) => String(category._id));
    const prepTimeValues = getValues(prepTime);
    const difficultyValues = getValues(difficulty);
    const typesValues = getValues(types);

    const filtersObject = {
      categories: categoriesIds,
      prepTime: prepTimeValues,
      difficulty: difficultyValues,
      types: typesValues,
    };

    setFilters(filtersObject);

    const url = createRequestUrl(title, filtersObject);
    //@ts-ignore
    setPagination({ currentPage: 1 });

    if (location.pathname === '/mes-recettes') {
      history.push(`/mes-recettes?page=1${url}`);
      fetchUserRecipe();
    } else {
      history.push(`/decouvrir?page=1${url}`);
      fetchRecipes();
    }
  };

  const getValues = (object: Object) => {
    return Object.entries(object)
      .filter((object) => object[1])
      .map((object) => object[0]);
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
        <button
          type="submit"
          title="Appliquer les filtres"
          className={classes.applyFiltersButton}
          onClick={handleSubmit}
        >
          Appliquer
        </button>
      </div>
    </>
  );
};

export default Filters;
