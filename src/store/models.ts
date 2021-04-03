import { Models } from '@rematch/core';
import user from './models/user';

export interface RootModel extends Models<RootModel> {
  user: typeof user;
}

export const models: RootModel = { user };
