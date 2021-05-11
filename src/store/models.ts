import { Models } from '@rematch/core';
import recipe from '../modules/recipe/state/recipe';
import user from '../modules/user/state/user';

export interface RootModel extends Models<RootModel> {
  user: typeof user;
  recipe: typeof recipe;
}

export const models: RootModel = { user, recipe };
