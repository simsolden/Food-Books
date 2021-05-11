import { User } from '../../../common/index.d';

export class UserFactory {
  static create(): User {
    return {
      id: -1,
      username: '',
      firstname: '',
      lastname: '',
      email: '',
    };
  }
}
