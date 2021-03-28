import { User } from '../../common/types/user';

type State = {
  user: User;
};

const userInfo = {
  state: {} as State,
  reducers: {
    updateUserInfo: (state: State, user: User) => ({ ...state, user }),
  },
};

export default userInfo;
