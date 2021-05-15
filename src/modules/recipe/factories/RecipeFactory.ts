import { Recipe, Difficulty, Cost, Measurement } from '../../../common/index.d';
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
      pictures: ['https://cdn.pixabay.com/photo/2017/03/17/10/29/breakfast-2151201_960_720.jpg'],
      type: 0,
      categories: [0],
      prepSteps: ['', '', ''],
      ingredients: [IngredientFactory.create(), IngredientFactory.create(), IngredientFactory.create()],
      isPrivate: false,
    };
  };

  static createMock = (): Recipe => {
    return {
      id: -1,
      name: 'Tacos maison',
      prepTime: 65,
      cookingTime: 15,
      difficulty: Difficulty.Medium,
      cost: Cost.Medium,
      servings: 4,
      grade: 3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget finibus magna. Sed vel feugiat risus. Nullam mollis mi tortor, a viverra ex venenatis vel. Aliquam dapibus, sapien at vehicula facilisis, quam enim bibendum erat, mollis elementum quam risus a arcu. Donec eget lorem nec augue porta eleifend. Nullam in.',
      pictures: ['https://cdn.pixabay.com/photo/2017/03/17/10/29/breakfast-2151201_960_720.jpg'],
      type: 0,
      categories: [0],
      prepSteps: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget finibus magna. Sed vel feugiat risus. Nullam mollis mi tortor, a viverra ex venenatis vel. Aliquam dapibus, sapien at vehicula facilisis, quam enim bibendum erat, mollis elementum quam risus a arcu. Donec eget lorem nec augue porta eleifend. Nullam in.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget finibus magna. Seda viverra ex venenatis vel. Aliquam dapibus, sapien at vehicula facilisis, quam enim bibendum erat, mollis elementum quam risus a arcu. Donec eget lorem nec augue porta eleifend. Nullam in.',
        'Sed vel feugiat risus. Nullam mollis mi tortor, a viverra ex venenatis vel. Aliquam dapibus, sapien at vehicula facilisis, quam enim bibendum erat, mollis elementum quam risus a arcu. Donec eget lorem nec augue porta eleifend. Nullam in.',
        'Sed vel feugiat risus. Nullam mollis mi tortor, a viverra ex venenatis vel. Aliquam dapibus, sapien at vehicula facilisis, quam enim bibendum erat, mollis elementum quam risus a arcu. Donec eget lorem nec augue porta eleifend. Nullam in.',
      ],
      ingredients: [
        IngredientFactory.createMock('Poivrons', Measurement.None, 2),
        IngredientFactory.createMock('Viande hachée', Measurement.Gram, 200),
        IngredientFactory.createMock('Pain à tacos', Measurement.None, 1),
        IngredientFactory.createMock('épices', Measurement.Pack, 1),
        IngredientFactory.createMock('sauce tomate', Measurement.Liter, 1),
        IngredientFactory.createMock('cumin', Measurement.TableSpoon, 1),
        IngredientFactory.createMock('arabic powder', Measurement.TeaSpoon, 1),
        IngredientFactory.createMock('harissa', Measurement.Centiliter, 1),
        IngredientFactory.createMock('jus de citron', Measurement.Mililiter, 10),
        IngredientFactory.createMock('poulet', Measurement.Kilo, 1),
      ],
      isPrivate: false,
    };
  };
}
