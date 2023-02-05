import { Checkbox, Input, InputLabel, ListItemText, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../store';
import classes from './Categories.module.css';

interface Props {
  selectedCategories: string[];
  handleChange: (
    event: React.ChangeEvent<{
      value: unknown;
    }>
  ) => void;
}

const Categories: React.FC<Props> = ({ handleChange, selectedCategories }) => {
  const categories = useSelector((state: RootState) => state.recipe.categories).map((category) => category.title);

  return (
    <div className={classes.categories}>
      <h2>CATÉGORIES</h2> <hr />
      <InputLabel>Sélectionner</InputLabel>
      <Select
        labelId="demo-mutiple-checkbox-label"
        id="demo-mutiple-checkbox"
        multiple
        fullWidth
        value={selectedCategories}
        onChange={handleChange}
        input={<Input />}
        renderValue={(selected) => (selected as string[]).join(', ')}
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            <Checkbox
              checked={selectedCategories.indexOf(category) > -1}
            />
            <ListItemText primary={category} />
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default Categories;
