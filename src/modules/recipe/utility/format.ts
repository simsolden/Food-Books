import { Ingredient } from '../../../common';

export const getFullTime = (time: number) => {
  let fullTime = `${Math.round(time / 60)}H`;

  if (time % 60 < 10) {
    fullTime += `0${time % 60}`;
  } else {
    fullTime += time % 60;
  }

  return fullTime;
};

export const getIngredientText = (ingredient: Ingredient, servings: number, recipeServings: number) => {
  const vowels = ['a', 'â', 'e', 'é', 'è', 'ê', 'i', 'î', 'o', 'ô', 'u', 'û', 'ù', 'y'];
  const measurement = ['', 'kg', 'g', 'l', 'cl', 'ml', 'c.c.', 'c.s.', 'sachet']
    .slice(ingredient.measurement, ingredient.measurement + 1)
    .join();

  let ingredientText = `${(ingredient.quantity / recipeServings) * servings} `;

  if (measurement) {
    ingredientText += `${measurement} `;

    if (vowels.includes(ingredient.name.charAt(0))) {
      ingredientText += "d'";
    } else {
      ingredientText += 'de ';
    }
  }

  ingredientText += ingredient.name;

  return ingredientText;
};
