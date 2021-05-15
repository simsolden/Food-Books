import { Ingredient, Measurement } from '../../../common/index.d';

export class IngredientFactory {
  static create(): Ingredient {
    return {
      name: '',
      measurement: Measurement.None,
      quantity: 0,
    };
  }

  static createMock(name: string, measurement: Measurement, quantity: number): Ingredient {
    return {
      name,
      measurement,
      quantity,
    };
  }
}
