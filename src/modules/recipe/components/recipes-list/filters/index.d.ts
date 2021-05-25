export interface Type {
  appetizer: boolean;
  entry: boolean;
  meal: boolean;
  dessert: boolean;
  drink: boolean;
  other: boolean;
}

export interface PrepTime {
  fast: boolean;
  medium: boolean;
  slow: boolean;
}

export interface Difficulty {
  easy: boolean;
  medium: boolean;
  hard: boolean;
}

interface Filters {
  types: string[];
  categories: string[];
  difficulty: string[];
  prepTime: string[];
}
