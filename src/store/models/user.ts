import { User } from '../../common/types/user';

type State = {
  isAuthenticated: boolean;
};

const userInfo = {
  state: {
    isAuthenticated: true,
  } as State,
  reducers: {
    updateUserInfo: (state: State, user: User) => ({ ...state, user }),
  },
};

export default userInfo;