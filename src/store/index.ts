import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import { models, RootModel } from './models';

export const store = init({
  models,
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type State = RematchRootState<RootModel>;
