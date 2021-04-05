import { Difficulty } from '..';

export default class DifficultyFactory {
  static create(): Difficulty {
    return {
      easy: false,
      medium: false,
      hard: false,
    };
  }
}
