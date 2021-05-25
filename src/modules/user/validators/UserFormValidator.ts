import { User } from '../../../common';

export default class UserFormValidator {
  static validateCredentials(credentials: { email: string; password: string }) {
    return (
      credentials.email.length >= 5 && credentials.email.match(/^\S+@\S+\.\S+$/) && credentials.password.length >= 6
    );
  }

  static validateUser(user: User, passwordConf: string) {
    const { email, username, password, firstname, lastname } = user;
    let validation = true;

    validation = validation && !!email.match(/^\S+@\S+\.\S+$/) && UserFormValidator.validateTextSize(email, 5);
    validation = validation && !!username.match(/^\S+$/);
    validation = validation && UserFormValidator.validateBirthdate(user);
    validation = validation && UserFormValidator.validateTextSize(firstname, 2, 40);
    validation = validation && UserFormValidator.validateTextSize(lastname, 2, 40);
    validation = validation && UserFormValidator.validateTextSize(password, 6) && password === passwordConf;
    return validation;
  }

  static confirmPassword(password: string, passwordConf: string) {
    return password === passwordConf;
  }

  static validateBirthdate(user: User) {
    return (
      user.birthdate > new Date(+new Date() - 120 * 365 * 24 * 60 * 60 * 1000) &&
      user.birthdate < new Date(+new Date() - 14 * 365 * 24 * 60 * 60 * 1000)
    );
  }

  private static validateTextSize(text: string, minSize: number, maxSize?: number) {
    if (maxSize) {
      return text.length >= minSize && text.length < maxSize;
    } else {
      return text.length >= minSize;
    }
  }
}
