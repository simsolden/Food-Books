import { Models } from '@rematch/core';
import planning from '../modules/planning/state/planning';
import recipe from '../modules/recipe/state/recipe';
import user from '../modules/user/state/user';

export interface RootModel extends Models<RootModel> {
  user: typeof user;
  recipe: typeof recipe;
  planning: typeof planning;
}

export const models: RootModel = { user, recipe, planning };
