import React from 'react';
import { Select, MenuItem, FormHelperText } from '@material-ui/core';
import classes from './CustomSelect.module.css';

interface Props {
  error: boolean;
  currentValue: number;
  label: string;
  errorMessage?: string;
  values: string[];
  onChange: (value: string) => void;
}

const CustomSelect: React.FC<Props> = ({ currentValue, values, error, errorMessage, onChange, label }) => {
  const items = values.map((item, index) => {
    return (
      <MenuItem value={index + 1} key={index}>
        {item}
      </MenuItem>
    );
  });
  return (
    <div style={label === 'Catégorie' ? { display: 'flex', flexDirection: 'column', width: '100%' } : {}}>
      <Select
        label={label}
        className={classes.select}
        value={currentValue}
        onChange={(event) => onChange(String(event.target.value))}
        fullWidth
        error={error}
      >
        <MenuItem value={0} disabled>
          {label}
        </MenuItem>
        {items}
      </Select>
      {error && <FormHelperText style={{ color: 'red' }}>{errorMessage}</FormHelperText>}
    </div>
  );
};

export default CustomSelect;
