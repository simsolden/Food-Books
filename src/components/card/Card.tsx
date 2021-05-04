import React from 'react';
import classes from './card.module.css';

interface Props {
  style: string;
  title: string;
  pictureURI: string;
}

const Card: React.FC<Props> = ({ style, title, pictureURI }) => {
  const modalClasses = [classes.card];

  if (style === 'lastRecipes') {
    modalClasses.push(classes.lastRecipes);
  } else if (style === 'favouriteRecipes') {
    modalClasses.push(classes.favouriteRecipes);
  }

  return (
    <div className={modalClasses.join(' ')}>
      <img src={pictureURI} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default Card;
