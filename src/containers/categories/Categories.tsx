import React from 'react';
import { useSelector } from 'react-redux';
import DetailedCard from '../../components/card/detailedCard/DetailedCard';
import { RootState } from '../../store';
import classes from './Categories.module.css';

interface Props {}

const Categories: React.FC<Props> = () => {
  const categories = useSelector((state: RootState) => state.recipe.categories);

  const categoriesCards = categories.map((category) => <DetailedCard category={category} />);
  return (
    <div className={classes.container}>
      <div className={classes.categories}>{categoriesCards}</div>
    </div>
  );
};

export default Categories;
