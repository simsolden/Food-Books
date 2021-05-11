import React from 'react';
import SearchBar from '../../components/inputs/search-bar/SearchBar';
import logo from '../../assets/logo-white.png';
import classes from './styles/Home.module.css';
import Card from '../../components/card/Card';

interface Props {}

const Home: React.FC<Props> = (props) => {
  return (
    <div className={classes.home}>
      <div className={classes.searchBar}>
        <SearchBar
          onSubmit={() => {
            alert('works');
          }}
        />
      </div>
      <div className={classes.logo}>
        <img src={logo} alt="Logo food books" />
      </div>
      <div className={classes.lastRecipes}>
        <h2>Vos dernières recettes</h2>
        <div className={classes.lastRecipesCards}>
          <Card
            type="lastRecipe"
            pictureURI="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
            title="Tacos maison"
          />
          <Card
            type="lastRecipe"
            pictureURI="https://cdn.pixabay.com/photo/2016/10/26/14/51/peanuts-1771672_960_720.jpg"
            title="Fraise"
          />
          <Card
            type="lastRecipe"
            pictureURI="https://cdn.pixabay.com/photo/2014/05/18/11/49/olive-oil-346997_960_720.jpg"
            title="bouffe"
          />
          <Card
            type="lastRecipe"
            pictureURI="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
            title="Rotî à la sauce du chef..."
          />
        </div>
      </div>
      <div className={classes.lastRecipes}>
        <h2>Découvrez</h2>
        <div className={classes.lastRecipesCards}>
          <Card
            type="lastRecipe"
            pictureURI="https://cdn.pixabay.com/photo/2016/10/26/14/51/peanuts-1771672_960_720.jpg"
            title="Fraise"
          />
          <Card
            type="lastRecipe"
            pictureURI="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
            title="Tacos maison"
          />
          <Card
            type="lastRecipe"
            pictureURI="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
            title="Tacos maison"
          />
          <Card
            type="lastRecipe"
            pictureURI="https://cdn.pixabay.com/photo/2014/05/18/11/49/olive-oil-346997_960_720.jpg"
            title="bouffe"
          />
          <Card
            type="lastRecipe"
            pictureURI="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
            title="Tacos maison"
          />
          <Card
            type="lastRecipe"
            pictureURI="https://cdn.pixabay.com/photo/2016/10/26/14/51/peanuts-1771672_960_720.jpg"
            title="Fraise"
          />
          <Card
            type="lastRecipe"
            pictureURI="https://cdn.pixabay.com/photo/2014/05/18/11/49/olive-oil-346997_960_720.jpg"
            title="bouffe"
          />
          <Card
            type="lastRecipe"
            pictureURI="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
            title="Rotî à la sauce du chef..."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
