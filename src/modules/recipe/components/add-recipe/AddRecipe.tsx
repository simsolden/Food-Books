import React, { useState } from 'react';
import { Recipe } from '../../../../common';
import PictureInput from '../../../../components/inputs/picture-input/PictureInput';
import CustomSelect from '../../../../components/inputs/custom-select/CustomSelect';
import TextInput from '../../../../components/inputs/text-input/TextInput';
import { RecipeFactory } from '../../factories/RecipeFactory';
import RecipeFormValidator from '../../validators/FormValidator';
import classes from './AddRecipe.module.css';
import CategorySelect from './category-select/CategorySelect';
import AddIngredient from './add-ingredient/AddIngredient';
import { IngredientFactory } from '../../factories/IngredientFactory';
import AddStep from './add-step/AddStep';
import { Checkbox, FormControlLabel } from '@material-ui/core';

interface Props {}

const AddRecipe: React.FC<Props> = (props) => {
  let [recipe, setRecipe] = useState<Recipe>(RecipeFactory.create());
  let [picture, setPicture] = useState<File>();
  let [submitted, setSubmitted] = useState(false);

  let categoriesSelect = recipe.categories.map((category, index) => (
    <CategorySelect
      key={index}
      error={submitted && category === 0}
      category={category}
      onChange={(input) => handleCategoryChange(index, +input)}
      onRemove={() => handleRemoveElement('category', index)}
    />
  ));

  let ingredientsForm = recipe.ingredients.map((ingredient, index) => (
    <AddIngredient
      key={index}
      error={submitted && !RecipeFormValidator.validateIngredient(ingredient)}
      ingredient={ingredient}
      onChangeIngredient={(property, input) => handleIngredientChange(index, property, input)}
      onRemove={() => handleRemoveElement('ingredient', index)}
    />
  ));

  let prepStepsForm = recipe.prepSteps.map((step, index) => (
    <AddStep
      key={index}
      index={index + 1}
      error={submitted && !RecipeFormValidator.validateStepDescription(step)}
      stepDescription={step}
      onChangeDescription={(input) => handleStepDescriptionChange(index, input)}
      onRemove={() => handleRemoveElement('stepDescription', index)}
    />
  ));

  const handleIngredientChange = (index: number, property: string, input: string) => {
    const updatedRecipe = { ...recipe };

    if (property === 'quantity') {
      updatedRecipe.ingredients[index].quantity = +input;
    } else {
      // @ts-ignore
      updatedRecipe.ingredients[index][property] = input;
    }

    setRecipe(updatedRecipe);
  };

  const handleChange = (fieldName: string, inputValue: string | number | boolean) => {
    const updatedRecipe = { ...recipe };

    // @ts-ignore
    updatedRecipe[fieldName] = inputValue;
    setRecipe(updatedRecipe);
    console.log(recipe);
  };

  const handleStepDescriptionChange = (index: number, inputValue: string) => {
    const updatedRecipe = { ...recipe };

    updatedRecipe.prepSteps[index] = inputValue;
    setRecipe(updatedRecipe);
  };

  const handleCategoryChange = (index: number, inputValue: number) => {
    const updatedRecipe = { ...recipe };

    updatedRecipe.categories[index] = inputValue;
    setRecipe(updatedRecipe);
  };

  const handleRemoveElement = async (property: string, index: number) => {
    const updatedRecipe = { ...recipe };

    if (property === 'category') {
      updatedRecipe.categories.splice(index, 1);
    } else if (property === 'ingredient') {
      updatedRecipe.ingredients.splice(index, 1);
    } else {
      updatedRecipe.prepSteps.splice(index, 1);
    }

    setRecipe(updatedRecipe);
  };

  const handleAddElement = (property: string) => {
    const updatedRecipe = { ...recipe };

    if (property === 'category') {
      updatedRecipe.categories.push(0);
    } else if (property === 'ingredient') {
      updatedRecipe.ingredients.push(IngredientFactory.create());
    } else {
      updatedRecipe.prepSteps.push('');
    }

    setRecipe(updatedRecipe);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className={classes.container}>
      <h1>Ajouter une recette</h1>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <h2>Informations de base</h2>
        <TextInput
          error={submitted && !RecipeFormValidator.validateName(recipe.name)}
          errorMessage="Le nom doit faire entre 3 et 40 caratères"
          label="Nom de la recette"
          onChange={(input) => handleChange('name', input)}
          type="text"
        />
        <div className={classes.recipeMeta}>
          <PictureInput onChange={setPicture} />
          <div className={classes.extraInfo}>
            <TextInput
              error={submitted && !RecipeFormValidator.validatePrepTime(recipe.prepTime)}
              errorMessage="Veuillez entrez un temps de préparation valide"
              label="Temps de préparation (minutes)"
              onChange={(input) => handleChange('prepTime', +input)}
              type="number"
            />
            <TextInput
              error={submitted && !RecipeFormValidator.validateCookingTime(recipe.cookingTime)}
              errorMessage="Veuillez entrez un temps de cuisson valide"
              label="Temps de cuisson (minutes)"
              onChange={(input) => handleChange('cookingTime', +input)}
              type="number"
            />
            <CustomSelect
              label="Difficulté"
              currentValue={recipe.difficulty}
              values={['Facile', 'Moyen', 'Difficile']}
              onChange={(input) => handleChange('difficulty', +input)}
              error={submitted && !RecipeFormValidator.validateDifficulty(recipe.difficulty)}
              errorMessage="Veuillez choisir une difficulté"
            />
            <CustomSelect
              label="Coût"
              currentValue={recipe.cost}
              values={['$', '$ $', '$ $ $']}
              onChange={(input) => handleChange('cost', +input)}
              error={submitted && !RecipeFormValidator.validateCost(recipe.cost)}
              errorMessage="Veuillez choisir un coût"
            />
            <TextInput
              error={submitted && !RecipeFormValidator.validateServings(recipe.servings)}
              errorMessage="Veuillez entrez le nombre de portions (entre 1 et 12)"
              label="Nombre de portions"
              onChange={(input) => handleChange('servings', +input)}
              type="number"
            />
          </div>
        </div>
        <TextInput
          error={submitted && !RecipeFormValidator.validateDescription(recipe.description)}
          errorMessage="Veuillez entrez un description (max 255 caractères)."
          label="Description"
          onChange={(input) => handleChange('description', input)}
          type="text"
          multi
        />
        <h2>Type et catégorie(s) de recette</h2>
        <h3 style={{ fontSize: '1.2rem', marginBottom: 0 }}>Type</h3>
        <CustomSelect
          label="Type de recette"
          currentValue={recipe.type}
          values={['Apéritif', 'Entrée', 'Plat', 'Dessert', 'Boisson', 'Autre']}
          onChange={(input) => handleChange('type', +input)}
          error={submitted && !RecipeFormValidator.validateType(recipe.type)}
          errorMessage="Veuillez choisir un type"
        />
        <div className={classes.categories}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: 0 }}>Catégorie(s)</h3>
          {categoriesSelect}
          <button type="button" onClick={() => handleAddElement('category')} className={classes.addCategoryButton}>
            Ajouter une catégorie
          </button>
        </div>
        <h2>Ingrédients et préparation</h2>
        <div className={classes.ingredients}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Ingrédients</h3>
          {ingredientsForm}
          <button type="button" onClick={() => handleAddElement('ingredient')} className={classes.addCategoryButton}>
            Ajouter un ingrédient
          </button>
        </div>
        <div className={classes.ingredients}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Étapes de préparation</h3>
          {prepStepsForm}
          <button type="button" onClick={() => handleAddElement('prepStep')} className={classes.addCategoryButton}>
            Ajouter une étape
          </button>
        </div>
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" onChange={(input) => handleChange('isPrivate', !input.target.checked)} />}
          label="Enregistrer comme recette privée"
          labelPlacement="end"
        />
        <div className={classes.actionButtons}>
          <input type="submit" value="Ajouter la recette" className={classes.addRecipeButton} />
          <input type="submit" value="Enregistrer comme brouillon" className={classes.addDraftButton} />
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
