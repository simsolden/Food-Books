import React from 'react';
import classes from './card.module.css';

interface Props {
  type: string;
  title: string;
  pictureURI: string;
}

const Card: React.FC<Props> = ({ type, title, pictureURI }) => {
  const modalClasses = [classes.card];
  modalClasses.push(classes.lastRecipe);

  // if (type === 'lastRecipe') {
  // } else if (type === 'favouriteRecipe') {
  //   modalClasses.push(classes.favouriteRecipe);
  // } else {
  //   modalClasses.push(classes.category);
  // }

  return (
    <div className={modalClasses.join(' ')}>
      <img src={pictureURI} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default Card;
