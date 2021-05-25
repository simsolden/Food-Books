export enum Difficulty {
  Easy = 1,
  Medium,
  Difficult,
}

export enum Cost {
  Low = 1,
  Medium,
  High,
}

export enum RecipeType {
  Appetizer = 1,
  Entry,
  Meal,
  Dessert,
  Drink,
  Other,
}

export enum Measurement {
  None,
  Kilo,
  Gram,
  Liter,
  Centiliter,
  Mililiter,
  TeaSpoon,
  TableSpoon,
  Pack,
}

export interface User {
  _id?: string;
  role: string;
  username: string;
  birthdate: Date;
  pictureUri: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface Ingredient {
  name: string;
  measurement: string;
  quantity: number;
}

export interface Category {
  _id: number;
  descriptionSource?: string;
  title: string;
  description: string;
  pictureUri: string;
}

export interface Recipe {
  _id?: string;
  owner?: string;
  username?: string;
  title: string;
  prepTime: number;
  cookingTime: number;
  difficulty: string;
  cost: string;
  servings: number;
  grade: number;
  description: string;
  pictures: string[];
  type: string;
  categories: number[];
  ingredients: Ingredient[];
  prepSteps: string[];
  isPrivate: boolean;
}

export interface PlanningRecipe {
  recipe: Recipe;
  date: Date;
}
