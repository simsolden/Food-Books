import React from 'react';
import classes from './SortSelect.module.css';

interface Props {}

const SortSelect: React.FC<Props> = (props) => {
  return (
    <form className={classes.sortSelect}>
      <label>Trier par </label>
      <select name="sort" id="sort-select">
        <option value="">- Sélectionner -</option>
        <option value="date">Date d'ajout</option>
        <option value="bestGrade">Meilleure note</option>
        <option value="popularity">Popularité</option>
        <option value="price">Prix croissant</option>
        <option value="time">Temps préparation</option>
      </select>
    </form>
  );
};

export default SortSelect;
