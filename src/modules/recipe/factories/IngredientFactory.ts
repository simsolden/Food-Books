import { Ingredient } from '../../../common/index.d';

export class IngredientFactory {
  static create(): Ingredient {
    return {
      name: '',
      measurement: '',
      quantity: 0,
    };
  }

  static createMock(name: string, measurement: string, quantity: number): Ingredient {
    return {
      name,
      measurement,
      quantity,
    };
  }
}
