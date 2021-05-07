import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import SideDrawer from '../../components/navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/navigation/Toolbar/Toolbar';
import { State } from '../../store';

interface Props {
  isAuthenticated: boolean;
}

const Layout: React.FC<Props> = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerOpenHandler = () => {
    setShowSideDrawer((prevState) => !prevState);
  };

  return (
    <>
      <Toolbar isAuth={props.isAuthenticated} open={sideDrawerOpenHandler} />
      <SideDrawer isAuth={props.isAuthenticated} show={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main style={{ marginTop: '5rem' }}>{props.children}</main>
    </>
  );
};

const mapStateToProps = (state: State) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(Layout);
