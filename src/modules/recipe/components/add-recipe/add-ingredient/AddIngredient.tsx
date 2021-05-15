import { IconButton } from '@material-ui/core';
import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CustomSelect from '../../../../../components/inputs/custom-select/CustomSelect';

import classes from './AddIngredient.module.css';
import TextInput from '../../../../../components/inputs/text-input/TextInput';
import { Ingredient } from '../../../../../common';

interface Props {
  error: boolean;
  ingredient: Ingredient;
  onChangeIngredient: (property: string, value: string) => void;
  onRemove: () => void;
}

const AddIngredient: React.FC<Props> = ({ error, onRemove, ingredient, onChangeIngredient }) => {
  return (
    <>
      <div className={classes.singleIndredient}>
        <TextInput
          error={error && ingredient.quantity <= 0}
          errorMessage="Veuillez entrez une quantité"
          label="Quantité"
          onChange={(input) => onChangeIngredient('quantity', input)}
          type="number"
          value={ingredient.quantity ? ingredient.quantity : ''}
        />
        <CustomSelect
          label="Mesure"
          currentValue={ingredient.measurement}
          values={['(autre)', 'kg', 'gr', 'L', 'cl', 'ml', 'c.s.', 'c.c.', 'sachet(s)']}
          onChange={(input) => onChangeIngredient('measurement', input)}
          error={false}
        />
        <TextInput
          error={(error && ingredient.name.length < 2) || ingredient.name.length > 20}
          label="Ingrédient"
          onChange={(input) => onChangeIngredient('name', input)}
          type="text"
          value={ingredient.name}
          errorMessage="Veuillez entrez un nom entre 2 et 20 caractères"
        />
        <IconButton
          aria-label="remove ingredient"
          component="span"
          style={{ margin: 'auto', color: '#bc5252' }}
          onClick={onRemove}
          title="Supprimer l'ingrédient"
        >
          <HighlightOffIcon />
        </IconButton>
      </div>
    </>
  );
};

export default AddIngredient;
