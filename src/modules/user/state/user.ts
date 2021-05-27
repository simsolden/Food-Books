import { AxiosResponse } from 'axios';
import { User } from '../../../common';
import { attachToken, instance } from '../../../common/axios';
import HttpException from '../../../common/HttpException';
import { Dispatch, RootState } from '../../../store';
import { UserFactory } from '../factories/UserFactory';

type State = {
  user: User;
  error: any | null;
  isAuthenticated: boolean;
};

const userInfo = {
  state: {
    user: UserFactory.create(),
    error: null,
    isAuthenticated: false,
  } as State,
  reducers: {
    updateUserInfo: (state: State, user: User) => ({ ...state, user }),
    setAuthenticated: (state: State, isAuthenticated: boolean) => ({ ...state, isAuthenticated }),
    setError: (state: State, error: string | null) => ({ ...state, error }),
    logout: (state: State) => {
      localStorage.removeItem('user-token');
      localStorage.removeItem('user-id');
      return { ...state, isAuthenticated: false, user: UserFactory.create() };
    },
  },
  effects: (dispatch: Dispatch) => ({
    async authenticate(payload: object): Promise<void> {
      dispatch.user.setError(null);

      instance
        .post('/login', payload)
        .then((response: AxiosResponse) => {
          localStorage.setItem('user-token', response.data.token);
          localStorage.setItem('user-id', response.data.user._id);

          attachToken();

          dispatch.user.updateUserInfo(response.data.user);
          dispatch.user.setAuthenticated(true);
        })
        .catch((error: HttpException) => {
          dispatch.user.setAuthenticated(false);

          if (error.statusCode === 401) {
            dispatch.user.setError('Identifiants invalides');
          } else {
            dispatch.user.setError(`Une erreur est survenue: ${error.message}`);
          }
        });
    },
    async signUp(user: User, state: RootState): Promise<void> {
      dispatch.user.setError(null);

      instance
        .post('/users', user)
        .then((response: AxiosResponse) => {
          localStorage.setItem('user-token', response.data.token);
          localStorage.setItem('user-id', response.data.user._id!);

          attachToken();

          dispatch.user.updateUserInfo(response.data.user);
          dispatch.user.setAuthenticated(true);
        })
        .catch((error: HttpException) => {
          dispatch.user.setAuthenticated(false);

          if (error.statusCode === 401) {
            dispatch.user.setError('Identifiants ou informations invalides');
          } else {
            if (error.message.includes('email') || error.message.includes('username')) {
              dispatch.user.setError(`Email ou nom d'utilisateur déjà utilisé`);
            } else {
              dispatch.user.setError(`Une erreur est survenue: ${error.message}`);
            }
          }
        });
    },
    async checkAuthenticationState(): Promise<void> {
      const token = localStorage.getItem('user-token');

      if (!token) {
        dispatch.user.logout();
        return;
      }

      attachToken();

      const result = await instance.get('/auto-login');

      dispatch.user.updateUserInfo(result.data.user);
      dispatch.user.setAuthenticated(true);

      try {
      } catch (err) {
        dispatch.user.logout();
      }
    },
  }),
};

export default userInfo;
