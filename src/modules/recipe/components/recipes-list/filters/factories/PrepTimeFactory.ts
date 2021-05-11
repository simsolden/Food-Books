import { PrepTime } from '..';

export default class PrepTimeFactory {
  static create(): PrepTime {
    return {
      short: false,
      medium: false,
      long: false,
    };
  }
}
