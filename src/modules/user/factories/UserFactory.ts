import { User } from '../../../common/index.d';

export class UserFactory {
  static create(): User {
    return {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      role: 'user',
      birthdate: new Date(),
      pictureUri: 'default-avatar.jpg',
      password: '',
    };
  }
}
