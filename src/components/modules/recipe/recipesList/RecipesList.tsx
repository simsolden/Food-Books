import React from 'react';
import classes from './styles/RecipesList.module.css';

import Recipe from '../Recipe';

interface Props {}

const RecipesList: React.FC<Props> = (props) => {
  return (
    <div className={classes.recipeList}>
      <Recipe
        title="Recette numéro uno"
        description="Voici la description uno Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut ut at repellendus reprehenderit dicta inventore esse fugit? Soluta, asperiores!"
      />
      <Recipe title="Recette numéro Dué" description="Voici la description dué" />
      <Recipe
        title="Recette numéro uno"
        description="Voici la description uno Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut ut at repellendus reprehenderit dicta inventore esse fugit? Soluta, asperiores!"
      />
      <Recipe title="Recette numéro Dué" description="Voici la description dué" />
      <Recipe
        title="Recette numéro uno"
        description="Voici la description uno Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut ut at repellendus reprehenderit dicta inventore esse fugit? Soluta, asperiores!"
      />
      <Recipe title="Recette numéro Dué" description="Voici la description dué" />
    </div>
  );
};

export default RecipesList;
