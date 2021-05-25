import React, { useEffect, useState } from 'react';
import { Recipe } from '../../../../common';
import PictureInput from '../../../../components/inputs/picture-input/PictureInput';
import CustomSelect from '../../../../components/inputs/custom-select/CustomSelect';
import TextInput from '../../../../components/inputs/text-input/TextInput';
import RecipeFormValidator from '../../validators/RecipeFormValidator';
import classes from './UpadteRecipe.module.css';
import CategorySelect from '../add-recipe/category-select/CategorySelect';
import AddIngredient from '../add-recipe/add-ingredient/AddIngredient';
import { IngredientFactory } from '../../factories/IngredientFactory';
import AddStep from '../add-recipe/add-step/AddStep';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { useRematchDispatch } from '../../../../hooks/useRematchDispatch';
import { Dispatch, RootState } from '../../../../store';
import { useSelector } from 'react-redux';
import { COST_LABELS, DIFFICULTY_LABELS, enumsMap, TYPE_LABELS } from '../../utils/constants';
import { useHistory, useParams } from 'react-router-dom';
import { RecipeRouteParams } from '../../../../common/RouteParams';

interface Props {}

const UpadteRecipe: React.FC<Props> = (props) => {
  let [picture, setPicture] = useState<File>();
  let [submitted, setSubmitted] = useState(false);

  const recipeId = useParams<RecipeRouteParams>().recipeSlug.split('_')[1];
  const history = useHistory();
  const recipe = useSelector((state: RootState) => state.recipe.singleRecipe);
  const categories = useSelector((state: RootState) => state.recipe.categories);
  const { setRecipe, fetchOneRecipe, updateRecipe, updatePicture } = useRematchDispatch((dispatch: Dispatch) => ({
    setRecipe: dispatch.recipe.setSingleRecipe,
    fetchOneRecipe: dispatch.recipe.fetchOneRecipe,
    updateRecipe: dispatch.recipe.updateRecipe,
    // @ts-ignore
    updatePicture: dispatch.recipe.updatePicture,
  }));

  useEffect(() => {
    fetchOneRecipe(recipeId);
  }, [fetchOneRecipe, recipeId]);

  let categoriesSelect = recipe.categories.map((category, index) => {
    const categoryIndex = categories.findIndex((cat) => category === cat._id);
    return (
      <CategorySelect
        key={index}
        error={submitted && category === 0}
        category={categoryIndex + 1}
        onChange={(input) => handleChange(index, +input, 'category')}
        onRemove={() => handleAddOrRemoveElement('category', 'remove', index)}
      />
    );
  });

  let ingredientsForm = recipe.ingredients.map((ingredient, index) => (
    <AddIngredient
      key={index}
      error={submitted && !RecipeFormValidator.validateIngredient(ingredient)}
      ingredient={ingredient}
      onChangeIngredient={(property, input) => handleIngredientChange(index, property, input)}
      onRemove={() => handleAddOrRemoveElement('ingredient', 'remove', index)}
    />
  ));

  let prepStepsForm = recipe.prepSteps.map((step, index) => (
    <AddStep
      key={index}
      index={index + 1}
      error={submitted && !RecipeFormValidator.validateStepDescription(step)}
      stepDescription={step}
      onChangeDescription={(input) => handleChange(index, input, 'stepDescription')}
      onRemove={() => handleAddOrRemoveElement('stepDescription', 'remove', index)}
    />
  ));

  const handleIngredientChange = (index: number, property: string, input: string) => {
    const updatedRecipe = { ...recipe };

    if (property === 'quantity') {
      updatedRecipe.ingredients[index].quantity = +input;
    } else if (property === 'measurement') {
      // @ts-ignore
      updatedRecipe.ingredients[index][property] = enumsMap.get('measurement')![+input];
    } else {
      // @ts-ignore
      updatedRecipe.ingredients[index][property] = input.toLocaleLowerCase();
    }

    setRecipe(updatedRecipe);
  };

  const handleChange = (field: string | number, inputValue: string | number | boolean, type?: string) => {
    const updatedRecipe = { ...recipe };

    if (type === 'select') {
      // @ts-ignore
      updatedRecipe[field] = enumsMap.get(field)[inputValue];
    } else if (type === 'stepDescription') {
      // @ts-ignore
      updatedRecipe.prepSteps[field] = inputValue;
    } else if (type === 'category') {
      // @ts-ignore
      updatedRecipe.categories[field] = categories[inputValue - 1]._id;
    } else {
      // @ts-ignore
      updatedRecipe[field] = inputValue;
    }

    setRecipe(updatedRecipe);
  };

  const handleAddOrRemoveElement = async (property: string, type?: string, index?: number) => {
    const updatedRecipe = { ...recipe };

    if (type === 'remove') {
      if (property === 'category') {
        updatedRecipe.categories.splice(index!, 1);
      } else if (property === 'ingredient') {
        updatedRecipe.ingredients.splice(index!, 1);
      } else {
        updatedRecipe.prepSteps.splice(index!, 1);
      }
    } else {
      if (property === 'category') {
        updatedRecipe.categories.push(0);
      } else if (property === 'ingredient') {
        updatedRecipe.ingredients.push(IngredientFactory.create());
      } else {
        updatedRecipe.prepSteps.push('');
      }
    }

    setRecipe(updatedRecipe);
  };

  const handleSubmit = async () => {
    setSubmitted(true);

    if (!RecipeFormValidator.validateFullRecipe(recipe)) {
      return;
    }
    const recipeToSend: Recipe = { ...recipe };

    console.log(recipeToSend.categories);

    recipeToSend.ingredients = recipe.ingredients.map((ingredient) => {
      if (ingredient.measurement === '') {
        ingredient.measurement = 'other';
      }
      return ingredient;
    });

    if (picture) {
      const pictureUri = await updatePicture(picture);
      // @ts-ignore
      recipeToSend.pictures[0] = pictureUri;
    }

    const createdRecipe = await updateRecipe(recipeToSend);

    if (createdRecipe) {
      history.push('/mes-recettes?page=1');
    }
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
          error={submitted && !RecipeFormValidator.validateName(recipe.title)}
          errorMessage="Le nom doit faire entre 3 et 40 caratères"
          label="Nom de la recette"
          onChange={(input) => handleChange('title', input)}
          type="text"
          value={recipe.title}
        />
        <div className={classes.recipeMeta}>
          <PictureInput onChange={setPicture} picture={recipe.pictures[0]} />
          <div className={classes.extraInfo}>
            <TextInput
              error={submitted && !RecipeFormValidator.validatePrepTime(recipe.prepTime)}
              errorMessage="Veuillez entrez un temps de préparation valide"
              label="Temps de préparation (minutes)"
              onChange={(input) => handleChange('prepTime', +input)}
              type="number"
              value={recipe.prepTime}
            />
            <TextInput
              error={submitted && !RecipeFormValidator.validateCookingTime(recipe.cookingTime)}
              errorMessage="Veuillez entrez un temps de cuisson valide"
              label="Temps de cuisson (minutes)"
              onChange={(input) => handleChange('cookingTime', +input)}
              type="number"
              value={recipe.cookingTime}
            />
            <CustomSelect
              label="Difficulté"
              currentValue={enumsMap.get('difficulty')!.indexOf(recipe.difficulty)}
              values={DIFFICULTY_LABELS}
              onChange={(input) => handleChange('difficulty', +input, 'select')}
              error={submitted && !RecipeFormValidator.validateEnum('difficulty', recipe.difficulty)}
              errorMessage="Veuillez choisir une difficulté"
            />
            <CustomSelect
              label="Coût"
              currentValue={enumsMap.get('cost')!.indexOf(recipe.cost)}
              values={COST_LABELS}
              onChange={(input) => handleChange('cost', +input, 'select')}
              error={submitted && !RecipeFormValidator.validateEnum('cost', recipe.cost)}
              errorMessage="Veuillez choisir un coût"
            />
            <TextInput
              error={submitted && !RecipeFormValidator.validateServings(recipe.servings)}
              errorMessage="Veuillez entrez le nombre de portions (entre 1 et 12)"
              label="Nombre de portions"
              onChange={(input) => handleChange('servings', +input)}
              type="number"
              value={recipe.servings}
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
          value={recipe.description}
        />
        <h2>Type et catégorie(s) de recette</h2>
        <h3 style={{ fontSize: '1.2rem', marginBottom: 0 }}>Type</h3>
        <CustomSelect
          label="Type de recette"
          currentValue={enumsMap.get('type')!.indexOf(recipe.type)}
          values={TYPE_LABELS}
          onChange={(input) => handleChange('type', +input, 'select')}
          error={submitted && !RecipeFormValidator.validateEnum('type', recipe.type)}
          errorMessage="Veuillez choisir un type"
        />
        <div className={classes.categories}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: 0 }}>Catégorie(s)</h3>
          {categoriesSelect}
          <button
            type="button"
            title="Ajouter une catégorie"
            onClick={() => handleAddOrRemoveElement('category')}
            className={classes.addCategoryButton}
          >
            Ajouter une catégorie
          </button>
        </div>
        <h2>Ingrédients et préparation</h2>
        <div className={classes.ingredients}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Ingrédients</h3>
          {ingredientsForm}
          <button
            type="button"
            title="Ajouter un ingrédient"
            onClick={() => handleAddOrRemoveElement('ingredient')}
            className={classes.addCategoryButton}
          >
            Ajouter un ingrédient
          </button>
        </div>
        <div className={classes.ingredients}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Étapes de préparation</h3>
          {prepStepsForm}
          <button
            title="Ajouter une étape"
            type="button"
            onClick={() => handleAddOrRemoveElement('prepStep')}
            className={classes.addCategoryButton}
          >
            Ajouter une étape
          </button>
        </div>
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" onChange={(input) => handleChange('isPrivate', !!input.target.checked)} />}
          label="Enregistrer comme recette privée"
          labelPlacement="end"
        />
        <div className={classes.actionButtons}>
          <input type="submit" value="Enregistrer les modifications" className={classes.updateRecipeButton} />
        </div>
      </form>
    </div>
  );
};

export default UpadteRecipe;
