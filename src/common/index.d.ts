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
  id?: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
}

export interface Ingredient {
  name: string;
  measurement: Measurement;
  quantity: number;
}

export interface Category {
  id?: number;
  title: string;
  description: string;
  pictureUri: string;
}

export interface Recipe {
  id?: number;
  name: string;
  prepTime: number;
  cookingTime: number;
  difficulty: Difficulty;
  cost: Cost;
  servings: number;
  grade: number;
  description: string;
  pictures: string[];
  type: RecipeType;
  categories: number[];
  ingredients: Ingredient[];
  prepSteps: string[];
  isPrivate: boolean;
}
