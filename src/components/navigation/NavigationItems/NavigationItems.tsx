import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
interface Props {
  isAuthenticated: boolean;
}

const navigationItems: React.FC<Props> = ({ isAuthenticated }) => {
  return (
    <ul className={classes.navigationItems}>
      {isAuthenticated && (
        <>
          <NavigationItem link="/mes-recettes">MES RECETTES</NavigationItem>
          <NavigationItem link="/planning">MON PLANNING</NavigationItem>
        </>
      )}
      <NavigationItem link="/decouvrir">DÉCOUVRIR</NavigationItem>
      <NavigationItem link="/categories">CATÉGORIES</NavigationItem>
      {isAuthenticated ? (
        <NavigationItem isLogger link="/logout">
          DÉCONNEXION
        </NavigationItem>
      ) : (
        <NavigationItem isLogger link="/login">
          CONNEXION
        </NavigationItem>
      )}
    </ul>
  );
};

export default navigationItems;
