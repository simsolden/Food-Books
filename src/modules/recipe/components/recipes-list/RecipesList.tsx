import React from 'react';
import classes from './RecipesList.module.css';

import RecipeItem from './single-recipe-item/RecipeItem';
import Filters from './filters/Filters';

interface Props {
  userRecipes: boolean;
  show: boolean;
  closed: () => void;
}

const RecipesList: React.FC<Props> = ({ userRecipes, show, closed }) => {
  return (
    <div className={classes.recipesPage}>
      <Filters show={show} closed={closed} />
      <div className={classes.recipeList}>
        <RecipeItem
          isUserRecipe={userRecipes}
          title="Recette numéro uno"
          description="Voici la description uno Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut ut at repellendus reprehenderit dicta inventore esse fugit? Soluta, asperiores!"
          ingredientsList="Poivrons, Oeufs, Boeuf haché, fromage, poulet, semoule de blé, courgette,... "
        />
        <RecipeItem
          isUserRecipe={userRecipes}
          title="Recette numéro Dué"
          description="Voici la description dué"
          ingredientsList="Poivrons, Oeufs, Boeuf haché, fromage, poulet, semoule de blé, courgette,... "
        />
        <RecipeItem
          isUserRecipe={userRecipes}
          title="Recette numéro uno"
          description="Voici la description uno Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut ut at repellendus reprehenderit dicta inventore esse fugit? Soluta, asperiores!"
          ingredientsList="Poivrons, Oeufs, Boeuf haché, fromage, poulet, semoule de blé, courgette,... "
        />
        <RecipeItem
          isUserRecipe={userRecipes}
          title="Recette numéro Dué"
          description="Voici la description dué"
          ingredientsList="Poivrons, Oeufs, Boeuf haché, fromage, poulet, semoule de blé, courgette,... "
        />
        <RecipeItem
          title="Recette numéro uno"
          description="Voici la description uno Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut ut at repellendus reprehenderit dicta inventore esse fugit? Soluta, asperiores!"
          ingredientsList="Poivrons, Oeufs, Boeuf haché, fromage, poulet, semoule de blé, courgette,... "
        />
        <RecipeItem
          title="Recette numéro Dué"
          description="Voici la description dué"
          ingredientsList="Poivrons, Oeufs, Boeuf haché, fromage, poulet, semoule de blé, courgette,... "
        />
      </div>
    </div>
  );
};

export default RecipesList;
