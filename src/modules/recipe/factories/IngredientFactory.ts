import { Ingredient, Measurement } from '../../../common/index.d';

export class IngredientFactory {
  static create(): Ingredient {
    return {
      name: '',
      measurement: Measurement.None,
      quantity: 0,
    };
  }
}
