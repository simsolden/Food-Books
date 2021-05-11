import { TextField } from '@material-ui/core';
import React from 'react';

interface Props {
  error: boolean;
  errorMessage: string;
  label: string;
  onChange: (input: string) => void;
  type: string;
  multi?: boolean;
  value?: string | number;
}

const TextInput: React.FC<Props> = React.memo(({ error, errorMessage, label, multi, onChange, type, value }) => {
  return error ? (
    <TextField
      fullWidth
      id="standard-basic"
      type={type}
      label={label}
      helperText={errorMessage}
      onChange={(event) => onChange(event.target.value)}
      error
      multiline={multi}
      rows={2}
      value={value}
    />
  ) : (
    <TextField
      fullWidth
      type={type}
      label={label}
      onChange={(event) => onChange(event.target.value)}
      multiline={multi}
      rows={2}
      value={value}
      InputLabelProps={label === 'Quantité' ? { shrink: true } : {}}
    />
  );
});

export default TextInput;
