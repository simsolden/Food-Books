import React from 'react';
import { NavLink } from 'react-router-dom';
import { Category } from '../../../common';
import { IMAGE_SOURCE } from '../../../common/config';
import { useRematchDispatch } from '../../../hooks/useRematchDispatch';
import { FiltersFactory } from '../../../modules/recipe/factories/FiltersFactory';
import { Dispatch } from '../../../store';
import classes from './DetailedCard.module.css';

interface Props {
  category: Category;
}

const DetailedCard: React.FC<Props> = ({ category }) => {
  const setFilters = useRematchDispatch((dispatch: Dispatch) => dispatch.recipe.setFilters);
  const modalClasses = [classes.card];
  modalClasses.push(classes.lastRecipe);

  const handleClick = () => {
    const filters = FiltersFactory.create();
    filters.categories = [String(category._id)];
    setFilters(filters);
  };

  return (
    <div className={modalClasses.join(' ')}>
      <NavLink to={'decouvrir?page=1&categories=' + category._id} onClick={handleClick}>
        <h3>{category.title}</h3>
        <img src={IMAGE_SOURCE + category.pictureUri} alt={category.title} />
        <p>{category.description}</p>
      </NavLink>
      {category.descriptionSource && (
        <p>
          Source:{' '}
          <a href={category.descriptionSource} target="_blank" rel="noreferrer">
            wikipédia
          </a>
        </p>
      )}
    </div>
  );
};

export default DetailedCard;
