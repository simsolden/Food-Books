import { PrepTime } from '../../../common/index.d';

export default class PrepTimeFactory {
  static create(): PrepTime {
    return {
      fast: false,
      medium: false,
      slow: false,
    };
  }
}
