import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SideDrawer from '../../components/navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/navigation/Toolbar/Toolbar';
import { State } from '../../store';

const Layout: React.FC = (props) => {
  const isAuthenticated = useSelector((state: State) => state.user.isAuthenticated);
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerOpenHandler = () => {
    setShowSideDrawer((prevState) => !prevState);
  };

  return (
    <>
      <Toolbar isAuth={isAuthenticated} open={sideDrawerOpenHandler} />
      <SideDrawer isAuth={isAuthenticated} show={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main style={{ marginTop: '5rem' }}>{props.children}</main>
    </>
  );
};

export default Layout;
