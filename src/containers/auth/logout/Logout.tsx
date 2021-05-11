import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useRematchDispatch } from '../../../common/useRematchDispatch';
import { Dispatch } from '../../../store';
// import classes from './Logout.module.css'

interface Props {}

const Logout: React.FC<Props> = (props) => {
  const { logout } = useRematchDispatch((dispatch: Dispatch) => ({
    logout: dispatch.user.logout,
  }));

  useEffect(() => {
    logout();
  }, [logout]);

  return <Redirect to="/" />;
};

export default Logout;
