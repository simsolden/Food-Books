import { Category } from '../../../common';
import { Dispatch } from '../../../store';

type State = {
  categories: Category[];
};

const recipe = {
  state: {
    categories: [
      {
        title: 'Asiatique',
        description: '',
        pictureUri: 'https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_960_720.jpg',
      },
      {
        title: 'Africaine',
        description: '',
        pictureUri: 'https://cdn.pixabay.com/photo/2017/02/19/16/59/tagine-2080272_960_720.jpg',
      },
      {
        title: 'Française',
        description: '',
        pictureUri: 'https://cdn.pixabay.com/photo/2016/11/13/05/21/restaurant-1820333_960_720.jpg',
      },
      {
        title: 'Italienne',
        description: '',
        pictureUri: 'https://cdn.pixabay.com/photo/2016/09/04/22/07/antipasta-1645401_960_720.jpg',
      },
      {
        title: 'Amérique du nord',
        description: '',
        pictureUri: 'https://cdn.pixabay.com/photo/2016/03/26/23/19/hamburger-1281855_960_720.jpg',
      },
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
