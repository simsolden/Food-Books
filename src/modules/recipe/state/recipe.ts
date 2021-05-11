import { Category } from '../../../common';
import { Dispatch } from '../../../store';

type State = {
  categories: Category[];
};

const recipe = {
  state: {
    categories: [
      { title: '', description: '' },
      { title: 'Asiatique', description: '' },
      { title: 'Africain', description: '' },
      { title: 'Française', description: '' },
    ],
  } as State,
  reducers: {
    setCategories: (state: State, categories: Category[]) => ({ ...state, categories }),
  },
  effects: (dispatch: Dispatch) => ({
    async fetchCategories(payload: any): Promise<Category[] | undefined> {
      try {
        const result: Category[] = await new Promise((resolve) => setTimeout(resolve, 1000));
        dispatch.recipe.setCategories(result);
        return result;
      } catch (error) {
        console.error(error);
      }
    },
  }),
};

export default recipe;
