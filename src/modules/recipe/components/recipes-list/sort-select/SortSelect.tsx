import React, { ChangeEvent } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useRematchDispatch } from '../../../../../hooks/useRematchDispatch';
import { Dispatch } from '../../../../../store';
import classes from './SortSelect.module.css';

interface Props {}

const SortSelect: React.FC<Props> = (props) => {
  const location = useLocation();
  const history = useHistory();

  const { setSort } = useRematchDispatch((dispatch: Dispatch) => ({
    setSort: dispatch.recipe.setSort,
  }));

  const handleSortChange = (input: ChangeEvent<HTMLSelectElement>) => {
    let search = new URLSearchParams(location.search);
    search.set('sort', input.target.value);
    history.push(`${location.pathname}?${search.toString()}`);

    setSort(input.target.value);
  };

  return (
    <form className={classes.sortSelect}>
      <label>Trier par </label>
      <select name="sort" id="sort-select" onChange={handleSortChange}>
        <option value="">- Sélectionner -</option>
        <option value="-_id">Date d'ajout</option>
        <option value="-grade">Meilleure note</option>
        <option value="cost">Prix croissant</option>
        <option value="prepTime">Temps préparation</option>
      </select>
    </form>
  );
};

export default SortSelect;
