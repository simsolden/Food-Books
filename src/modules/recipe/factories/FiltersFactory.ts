import { Filters } from '../../../common/index.d';

export class FiltersFactory {
  static create(): Filters {
    return {
      difficulty: [],
      categories: [],
      prepTime: [],
      types: [],
    };
  }
}
