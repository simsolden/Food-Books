import { Type } from '../../../common/index.d';

export default class TypeFactory {
  static create(): Type {
    return {
      appetizer: false,
      entry: false,
      meal: false,
      dessert: false,
      drink: false,
      other: false,
    };
  }
}
