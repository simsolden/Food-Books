import React from 'react';
import Card from '../../components/card/Card';
import classes from './Categories.module.css';

interface Props {}

const Categories: React.FC<Props> = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.categories}>
        <Card
          type="category"
          pictureURI="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
          title="Tacos maison"
        />
        <Card
          type="category"
          pictureURI="https://cdn.pixabay.com/photo/2016/10/26/14/51/peanuts-1771672_960_720.jpg"
          title="Fraise"
        />
        <Card
          type="category"
          pictureURI="https://cdn.pixabay.com/photo/2014/05/18/11/49/olive-oil-346997_960_720.jpg"
          title="bouffe"
        />
        <Card
          type="category"
          pictureURI="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
          title="Rotî à la sauce du chef..."
        />
        <Card
          type="category"
          pictureURI="https://cdn.pixabay.com/photo/2016/10/26/14/51/peanuts-1771672_960_720.jpg"
          title="Fraise"
        />
        <Card
          type="category"
          pictureURI="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
          title="Tacos maison"
        />
        <Card
          type="category"
          pictureURI="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
          title="Tacos maison"
        />
        <Card
          type="category"
          pictureURI="https://cdn.pixabay.com/photo/2014/05/18/11/49/olive-oil-346997_960_720.jpg"
          title="bouffe"
        />
        <Card
          type="category"
          pictureURI="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
          title="Tacos maison"
        />
        <Card
          type="category"
          pictureURI="https://cdn.pixabay.com/photo/2016/10/26/14/51/peanuts-1771672_960_720.jpg"
          title="Fraise"
        />
        <Card
          type="category"
          pictureURI="https://cdn.pixabay.com/photo/2014/05/18/11/49/olive-oil-346997_960_720.jpg"
          title="bouffe"
        />
        <Card
          type="category"
          pictureURI="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
          title="Rotî à la sauce du chef..."
        />
      </div>
    </div>
  );
};

export default Categories;
