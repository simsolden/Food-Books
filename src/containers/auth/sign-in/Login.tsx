import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useRematchDispatch } from '../../../common/useRematchDispatch';
import { Dispatch } from '../../../store';

interface Props {}

const Login: React.FC<Props> = (props) => {
  const { login } = useRematchDispatch((dispatch: Dispatch) => ({
    login: dispatch.user.login,
  }));

  useEffect(() => {
    login();
  }, [login]);

  return <Redirect to="/" />;
};

export default Login;
