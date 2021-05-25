import { PlanningRecipe, Recipe } from '../../../common';
import { Dispatch, RootState } from '../../../store';
import { instance } from '../../../common/axios';

type State = {
  planning: PlanningRecipe[];
  error: string | null;
  isLoading: boolean;
};

const planning = {
  state: {
    planning: [],
    error: null,
    isLoading: false,
  } as State,

  reducers: {
    setPlanning: (state: State, planning: PlanningRecipe[]) => ({ ...state, planning }),
    setIsLoading: (state: State, isLoading: boolean) => ({ ...state, isLoading }),
    setError: (state: State, error: string | null) => ({ ...state, error }),
  },

  effects: (dispatch: Dispatch) => ({
    async fetchPlanning(payload: any, state: RootState): Promise<void> {
      try {
        dispatch.recipe.setError(null);
        dispatch.recipe.setIsLoading(true);

        const result: any = await instance.get('/users/planning');

        const planning = result.data.userPlanning.planning.map((planningRecipe: any) => {
          const recipe = result.data.recipes.find((recipe: Recipe) => recipe._id === planningRecipe.recipeId);
          return { recipe, date: planningRecipe.date };
        });

        dispatch.planning.setPlanning(planning);
      } catch (error) {
        dispatch.recipe.setError(error.message);
      }
    },
    async addPlanningRecipe(payload: any, state: RootState): Promise<boolean> {
      try {
        dispatch.recipe.setError(null);
        dispatch.recipe.setIsLoading(true);

        await instance.put('/planning', payload);
        return true;
      } catch (error) {
        dispatch.recipe.setError(error.message);
        return false;
      }
    },
  }),
};

export default planning;
