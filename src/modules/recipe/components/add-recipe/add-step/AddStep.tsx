import { IconButton } from '@material-ui/core';
import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import classes from './AddStep.module.css';
import TextInput from '../../../../../components/inputs/text-input/TextInput';

interface Props {
  index: number;
  stepDescription: string;
  onChangeDescription: (value: string) => void;
  error: boolean;
  onRemove: () => void;
}

const AddStep: React.FC<Props> = ({ stepDescription, onChangeDescription, error, onRemove, index }) => {
  return (
    <div className={classes.singleStep}>
      <TextInput
        label={`Description de l'étape ${index}`}
        value={stepDescription}
        onChange={onChangeDescription}
        error={error}
        errorMessage="Veuillez entrez une description"
        type="text"
        multi
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

export default AddStep;
