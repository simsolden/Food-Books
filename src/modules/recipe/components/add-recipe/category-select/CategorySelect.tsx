import { IconButton } from '@material-ui/core';
import React from 'react';
import CustomSelect from '../../../../../components/inputs/custom-select/CustomSelect';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import classes from './CategorySelect.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store';

interface Props {
  error: boolean;
  category: number;
  onChange: (value: string) => void;
  onRemove: () => void;
}

const CategorySelect: React.FC<Props> = ({ category, error, onChange, onRemove }) => {
  const categories = useSelector((state: RootState) => state.recipe.categories).map((category) => category.title);

  return (
    <div className={classes.singleCategory}>
      <CustomSelect
        label="Catégorie"
        currentValue={category}
        values={categories}
        onChange={onChange}
        error={error}
        errorMessage="Entrez une catégorie correct"
      />
      <IconButton
        aria-label="remove category"
        component="span"
        style={{ margin: 'auto', color: '#bc5252' }}
        onClick={onRemove}
        title="Supprimer la catégorie"
      >
        <HighlightOffIcon />
      </IconButton>
    </div>
  );
};

export default CategorySelect;
