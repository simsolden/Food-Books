import { Recipe } from '../../../common/index.d';
import { IngredientFactory } from './IngredientFactory';

export class RecipeFactory {
  static create = (): Recipe => {
    return {
      title: '',
      prepTime: 0,
      cookingTime: 0,
      difficulty: '',
      cost: '',
      servings: 0,
      grade: 0,
      description: '',
      pictures: ['default-recipe.jpg'],
      type: '',
      categories: [0],
      prepSteps: ['', '', ''],
      ingredients: [IngredientFactory.create(), IngredientFactory.create(), IngredientFactory.create()],
      isPrivate: false,
    };
  };

  static createMock = (): Recipe => {
    return {
      title: 'Recette non trouvée...',
      prepTime: 65,
      cookingTime: 15,
      difficulty: 'easy',
      cost: 'low',
      servings: 4,
      grade: 3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget finibus magna. Sed vel feugiat risus. Nullam mollis mi tortor, a viverra ex venenatis vel. Aliquam dapibus, sapien at vehicula facilisis, quam enim bibendum erat, mollis elementum quam risus a arcu. Donec eget lorem nec augue porta eleifend. Nullam in.',
      pictures: ['default-recipe.jpg'],
      type: 'Meal',
      categories: [1],
      prepSteps: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget finibus magna. Sed vel feugiat risus. Nullam mollis mi tortor, a viverra ex venenatis vel. Aliquam dapibus, sapien at vehicula facilisis, quam enim bibendum erat, mollis elementum quam risus a arcu. Donec eget lorem nec augue porta eleifend. Nullam in.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget finibus magna. Seda viverra ex venenatis vel. Aliquam dapibus, sapien at vehicula facilisis, quam enim bibendum erat, mollis elementum quam risus a arcu. Donec eget lorem nec augue porta eleifend. Nullam in.',
        'Sed vel feugiat risus. Nullam mollis mi tortor, a viverra ex venenatis vel. Aliquam dapibus, sapien at vehicula facilisis, quam enim bibendum erat, mollis elementum quam risus a arcu. Donec eget lorem nec augue porta eleifend. Nullam in.',
        'Sed vel feugiat risus. Nullam mollis mi tortor, a viverra ex venenatis vel. Aliquam dapibus, sapien at vehicula facilisis, quam enim bibendum erat, mollis elementum quam risus a arcu. Donec eget lorem nec augue porta eleifend. Nullam in.',
      ],
      ingredients: [
        IngredientFactory.createMock('Lorem', 'other', 2),
        IngredientFactory.createMock('dolor', 'g', 200),
        IngredientFactory.createMock('sit amet', 'other', 1),
        IngredientFactory.createMock('consectetur', 'sachet', 1),
        IngredientFactory.createMock('ex venenatis', 'l', 1),
        IngredientFactory.createMock('feugiat', 'c.s.', 1),
        IngredientFactory.createMock('mi tortor', 'c.c.', 1),
        IngredientFactory.createMock('Nullam', 'cl', 1),
        IngredientFactory.createMock('sapien at', 'ml', 10),
        IngredientFactory.createMock('venenatis', 'kg', 1),
      ],
      isPrivate: false,
    };
  };
}
