import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './styles/NavigationItems.module.css';

interface Props {
  isAuthenticated: boolean;
}

const navigationItems: React.FC<Props> = ({ isAuthenticated }) => {
  return (
    <ul className={classes.NavigationItems}>
      {isAuthenticated && (
        <>
          <NavigationItem link="/mes-recettes">Mes recettes</NavigationItem>
          <NavigationItem link="/planning">Mon Planning</NavigationItem>
        </>
      )}
      <NavigationItem link="/categories">Catégories</NavigationItem>
      {isAuthenticated ? (
        <NavigationItem link="/logout">Log out</NavigationItem>
      ) : (
        <NavigationItem link="/login">Log in</NavigationItem>
      )}
    </ul>
  );
};

export default navigationItems;
