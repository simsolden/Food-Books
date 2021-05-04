import { useStyles, CssTextField } from './styles/MUIstyles';
import React, { useState } from 'react';

interface Props {
  onSubmit: (input: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSubmit }) => {
  const classes = useStyles();

  let [input, setInput] = useState('');

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={() => onSubmit(input)}>
      <CssTextField
        id="custom-css-outlined-input"
        label="Rechercher..."
        variant="outlined"
        style={{ backgroundColor: 'white', borderRadius: '5px' }}
        onChange={(event) => setInput(event.target.value)}
      />
    </form>
  );
};

export default SearchBar;
