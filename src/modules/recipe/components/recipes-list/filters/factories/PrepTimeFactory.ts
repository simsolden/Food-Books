import { PrepTime } from '..';

export default class PrepTimeFactory {
  static create(): PrepTime {
    return {
      fast: false,
      medium: false,
      slow: false,
    };
  }
}
