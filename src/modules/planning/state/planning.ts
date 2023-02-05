import { PlanningRecipe, Recipe } from '../../../common';
import { Dispatch } from '../../../store';
import { instance } from '../../../common/axios';

interface planningRecipePayload {
  planningRecipe: {
    recipeId: string | undefined;
    date: Date;
  };
}

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
    async fetchPlanning(): Promise<void> {
      try {
        dispatch.recipe.setError(null);
        dispatch.recipe.setIsLoading(true);

        const result: any = await instance.get('/users/planning');

        const planning = result.data.userPlanning.planning.map((planningRecipe: any) => {
          const recipe = result.data.recipes.find((recipe: Recipe) => recipe._id === planningRecipe.recipeId);
          return { _id: planningRecipe._id, recipe, date: planningRecipe.date };
        });

        dispatch.planning.setPlanning(planning);
        dispatch.recipe.setIsLoading(false);
      } catch (error) {
        dispatch.recipe.setIsLoading(false);
        if (error instanceof Error) {
          dispatch.recipe.setError(error.message);
        }
      }
    },
    async addPlanningRecipe(payload: planningRecipePayload): Promise<boolean> {
      try {
        dispatch.recipe.setError(null);
        dispatch.recipe.setIsLoading(true);

        await instance.post('/users/planning', payload);
        dispatch.recipe.setIsLoading(false);

        return true;
      } catch (error) {
        dispatch.recipe.setIsLoading(false);
        if (error instanceof Error) {
          dispatch.recipe.setError(error.message);
        }

        return false;
      }
    },
    async updatePlanning(payload: PlanningRecipe[]): Promise<boolean> {
      try {
        dispatch.recipe.setError(null);
        dispatch.recipe.setIsLoading(true);

        const planning = payload.map((planningRecipe) => ({
          _id: planningRecipe._id,
          recipeId: planningRecipe.recipe._id,
          date: planningRecipe.date,
        }));

        await instance.put('/users/planning', { planning });
        dispatch.planning.setPlanning(payload);
        dispatch.recipe.setIsLoading(false);
        return true;
      } catch (error) {
        dispatch.recipe.setIsLoading(false);
        if (error instanceof Error) {
          dispatch.recipe.setError(error.message);
        }
        return false;
      }
    },
  }),
};

export default planning;
