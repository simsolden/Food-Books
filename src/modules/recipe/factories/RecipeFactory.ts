import { Recipe } from '../../../common/index.d';
import { IngredientFactory } from './IngredientFactory';

export class RecipeFactory {
  static create = (): Recipe => {
    return {
      id: -1,
      name: '',
      prepTime: 0,
      cookingTime: 0,
      difficulty: 0,
      cost: 0,
      servings: 0,
      grade: 0,
      description: '',
      pictures: [],
      type: 0,
      categories: [0],
      prepSteps: ['', '', ''],
      ingredients: [IngredientFactory.create(), IngredientFactory.create(), IngredientFactory.create()],
      private: true,
    };
  };
}
