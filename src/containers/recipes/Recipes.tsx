import React from 'react';
// import classes from './MyRecipes.module.css'

interface Props {}

const Recipes: React.FC<Props> = (props) => {
  return (
    <div className="">
      <h2 style={{ fontFamily: 'Lora', fontStyle: 'italic' }}>My Recipes</h2>
    </div>
  );
};

export default Recipes;
