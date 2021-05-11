import { Type } from '..';

export default class TypeFactory {
  static create(): Type {
    return {
      aperitif: false,
      entree: false,
      plat: false,
      dessert: false,
    };
  }
}
