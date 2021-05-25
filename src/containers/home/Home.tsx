import React from 'react';
import classes from './styles/Home.module.css';
import SignUp from '../auth/sign-up/SignUp';
import logo from '../../assets/logo-white.png';

import SearchBar from '../../components/inputs/search-bar/SearchBar';
import { useHistory } from 'react-router-dom';

interface Props {}

const Home: React.FC<Props> = (props) => {
  const history = useHistory();

  return (
    <div className={classes.home}>
      <div className={classes.logo}>
        <img src={logo} alt="Logo food books" />
      </div>
      <div className={classes.searchBar}>
        <SearchBar
          onSubmit={(input) => {
            history.push(`/decouvrir?page=1&title=${input}`);
          }}
        />
      </div>
      <div className={classes.joinMessage}>
        <h2>Rejoignez Food Books </h2>
        <p>
          Avec Food Books, concevez votre propre livre de recette en ligne! Enregistrez vos recettes en les créant de
          toutes pièces ou en prenant celles des autres et en les modifiant pour aller plus vite. Vous avez aussi
          l’opportunité de gardez vos recettes privées afin de ne pas révéler vos secrets si bien gardés, ou de les
          partager pour en faire profiter à tout le monde! En plus de tout cela vous pourrez choisir et planifier vos
          repas pour la semaine et Food Books s’occupera de votre liste de course pour vous. Alors n’attendez plus !
        </p>
      </div>
      <SignUp />
    </div>
  );
};

export default Home;
