import { Category, Recipe, Filters } from '../../../common/index.d';
import { Dispatch, RootState } from '../../../store';
import { instance } from '../../../common/axios';
import { RecipeFactory } from '../factories/RecipeFactory';
import { createRequestUrl } from '../utils/createRequestUrl';

interface recipesPayload {
  recipes: Recipe[];
  isLoading: boolean;
}

interface categoriesPayload {
  categories: Category[];
  isLoading: boolean;
}

type State = {
  categories: Category[];
  recipes: Recipe[];
  userRecipes: Recipe[];
  singleRecipe: Recipe;
  isLoading: boolean;
  error: string | null;
  filters: Filters | null;
  title: string | null;
  pagination: any;
  sort: string;
};

const recipe = {
  state: {
    categories: [],
    recipes: [],
    userRecipes: [],
    singleRecipe: RecipeFactory.createMock(),
    isLoading: false,
    error: null,
    filters: null,
    title: null,
    pagination: { currentPage: 1 },
    sort: '_id',
  } as State,

  reducers: {
    setCategories: (state: State, payload: categoriesPayload) => ({
      ...state,
      categories: payload.categories,
      isLoading: payload.isLoading,
    }),
    setRecipes: (state: State, payload: recipesPayload) => ({
      ...state,
      recipes: payload.recipes,
      isLoading: payload.isLoading,
    }),
    setUserRecipes: (state: State, payload: recipesPayload) => ({
      ...state,
      userRecipes: payload.recipes,
      isLoading: payload.isLoading,
    }),
    setSingleRecipe: (state: State, recipe: Recipe) => ({ ...state, singleRecipe: recipe }),
    setPagination: (state: State, pagination: any) => ({ ...state, pagination }),
    setIsLoading: (state: State, isLoading: boolean) => ({ ...state, isLoading }),
    setError: (state: State, error: string | null) => ({ ...state, error }),
    setSort: (state: State, sort: string) => ({ ...state, sort }),
    setFilters: (state: State, filters: Filters) => ({ ...state, filters }),
    setTitle: (state: State, title: string | null) => ({ ...state, title }),
  },

  effects: (dispatch: Dispatch) => ({
    async fetchCategories(payload: any): Promise<void> {
      try {
        dispatch.recipe.setError(null);
        dispatch.recipe.setIsLoading(true);

        const result: any = await instance.get('/categories');

        dispatch.recipe.setCategories({ categories: result.data.result, isLoading: false });
      } catch (error) {
        dispatch.recipe.setError(error.message);
      }
    },
    async fetchRecipes(payload: any, state: RootState): Promise<void> {
      try {
        dispatch.recipe.setError(null);
        dispatch.recipe.setIsLoading(true);

        let url = payload?.query
          ? payload.query
          : `/recipes?page=${state.recipe.pagination.currentPage}${createRequestUrl(
              state.recipe.title,
              state.recipe.filters
            )}&sort=${state.recipe.sort}`;

        const result: any = await instance.get(url);
        // @ts-ignore
        dispatch.recipe.setPagination({ ...result.data.pagination });
        dispatch.recipe.setRecipes({ recipes: result.data.result, isLoading: false });
      } catch (error) {
        dispatch.recipe.setError(error.message);
      }
    },
    async fetchUserRecipes(payload: any, state: RootState): Promise<void> {
      try {
        dispatch.recipe.setError(null);
        dispatch.recipe.setIsLoading(true);

        let url = payload?.query
          ? payload.query
          : `/users/recipes?page=${state.recipe.pagination.currentPage}${createRequestUrl(
              state.recipe.title,
              state.recipe.filters
            )}&sort=${state.recipe.sort}`;

        const result: any = await instance.get(url);

        // @ts-ignore
        dispatch.recipe.setPagination({ ...result.data.pagination });
        dispatch.recipe.setUserRecipes({ recipes: result.data.result, isLoading: false });
      } catch (error) {
        dispatch.recipe.setError(error.message);
      }
    },
    async fetchOneRecipe(id: string): Promise<void> {
      try {
        dispatch.recipe.setError(null);
        dispatch.recipe.setIsLoading(true);

        const result: any = await instance.get(`/recipes/${id}`);

        dispatch.recipe.setIsLoading(false);
        dispatch.recipe.setSingleRecipe(result.data.result);
      } catch (error) {
        dispatch.recipe.setError(error.message);
      }
    },
    async createRecipe(recipePayload: Recipe): Promise<Recipe | void> {
      try {
        dispatch.recipe.setError(null);
        dispatch.recipe.setIsLoading(true);

        const result = await instance.post('/recipes', recipePayload);
        return result.data.result;
      } catch (error) {
        dispatch.recipe.setError(error.message);
      }
    },
    async updateRecipe(recipePayload: Recipe): Promise<Recipe | void> {
      try {
        dispatch.recipe.setError(null);
        dispatch.recipe.setIsLoading(true);

        const result = await instance.put(`/recipes/${recipePayload._id}`, recipePayload);
        return result.data.result;
      } catch (error) {
        dispatch.recipe.setError(error.message);
      }
    },
    async uploadPicture(picture: File): Promise<string | void> {
      try {
        dispatch.recipe.setError(null);
        dispatch.recipe.setIsLoading(true);

        let formData = new FormData();
        formData.append('image', picture);

        const result = await instance.post('/recipes/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        return result.data;
      } catch (error) {
        dispatch.recipe.setError(error.message);
      }
    },
    async updatePicture(picture: File, state: RootState): Promise<string | void> {
      try {
        dispatch.recipe.setError(null);
        dispatch.recipe.setIsLoading(true);

        let formData = new FormData();
        formData.append('image', picture);
        formData.append('oldPicture', state.recipe.singleRecipe.pictures[0]);
        console.log(formData);

        const result = await instance.post('/recipes/update-picture', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        return result.data;
      } catch (error) {
        dispatch.recipe.setError(error.message);
      }
    },
  }),
};

export default recipe;
