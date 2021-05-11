import { User } from '../../../common';
import { Dispatch } from '../../../store';
import { UserFactory } from '../factories/UserFactory';

type State = {
  user: User;
  isAuthenticated: boolean;
};

const userInfo = {
  state: {
    user: UserFactory.create(),
    isAuthenticated: false,
  } as State,
  reducers: {
    updateUserInfo: (state: State, user: User) => ({ ...state, user }),
    setAuthenticated: (state: State, isAuthenticated: boolean) => ({ ...state, isAuthenticated }),
    logout: (state: State) => ({ ...state, isAuthenticated: false }),
    login: (state: State) => ({ ...state, isAuthenticated: true }),
  },
  effect: (dispatch: Dispatch) => ({
    async authenticate(payload: object) {
      try {
        const user: User = await new Promise((resolve) => setTimeout(resolve, 1000));
        dispatch.user.updateUserInfo(user);
        dispatch.user.setAuthenticated(true);
      } catch (error) {
        console.error(error);
      }
    },
  }),
};

export default userInfo;
