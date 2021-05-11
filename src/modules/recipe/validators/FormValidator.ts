import { Cost, Difficulty, Ingredient, RecipeType } from '../../../common/index.d';

export default class RecipeFormValidator {
  private static minMax(value: number, min: number, max: number) {
    return value >= min && value <= max;
  }

  static validateName(inputValue: string) {
    return RecipeFormValidator.minMax(inputValue.length, 3, 40);
  }

  static validatePrepTime(inputValue: number) {
    return RecipeFormValidator.minMax(inputValue, 1, 3600 * 100);
  }

  static validateCookingTime(inputValue: number | null) {
    return !inputValue || RecipeFormValidator.minMax(inputValue, 1, 3600 * 100);
  }

  static validateDifficulty(inputValue: number) {
    return Object.values(Difficulty).includes(inputValue);
  }

  static validateCost = (inputValue: number) => {
    return Object.values(Cost).includes(inputValue);
  };

  static validateType = (inputValue: number) => {
    return Object.values(RecipeType).includes(inputValue);
  };

  static validateServings = (inputValue: number) => {
    return RecipeFormValidator.minMax(inputValue, 1, 12);
  };

  static validateDescription = (inputValue: string) => {
    return RecipeFormValidator.minMax(inputValue.length, 4, 255);
  };

  static validateIngredient = (ingredient: Ingredient) => {
    return ingredient.quantity !== 0 && ingredient.name.length >= 2;
  };

  static validateStepDescription = (stepDescription: string) => {
    return stepDescription.length >= 5 && stepDescription.length <= 255;
  };
}
