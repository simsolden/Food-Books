import React, { useState } from 'react';
import { KeyboardDateTimePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

import classes from './AddRecipeModal.module.css';
import { PlanningFormValidator } from '../../validators/PlanningFormValidator';

interface Props {
  onClose: () => void;
  onSave: (date: Date) => void;
}

const AddRecipeModal: React.FC<Props> = ({ onClose, onSave }) => {
  const [date, setDate] = useState(new Date(new Date().getTime() + 60 * 60 * 1000));
  const [submitted, setSubmitted] = useState(false);
  const [isRecipeSaved, setIsRecipeSaved] = useState(false);

  const handleChange = (date: MaterialUiPickersDate) => {
    if (date) {
      setDate(date);
    }
  };

  const handleSave = () => {
    setSubmitted(true);
    if (PlanningFormValidator.validateDate(date)) {
      onSave(date);
      setIsRecipeSaved(true);
      setTimeout(() => {
        setIsRecipeSaved(false);
      }, 2000);
    }
  };

  return (
    <div className={classes.recipeModal}>
      {isRecipeSaved ? (
        <p>Recette enregistrée !</p>
      ) : (
        <>
          <p className={classes.title}>Enregistrer la recette dans votre planning</p>
          <KeyboardDateTimePicker
            ampm={false}
            disableToolbar
            invalidDateMessage="Date non valide"
            variant="inline"
            format="dd/MM/yyyy HH:mm"
            margin="normal"
            value={date}
            minDateMessage="La date doit être dans le futur"
            maxDateMessage="La date doit être max. 6 jours dans le futur"
            maxDate={new Date(+new Date() + 5 * 24 * 60 * 60 * 1000)}
            disablePast
            onChange={(input: MaterialUiPickersDate) => handleChange(input)}
            KeyboardButtonProps={{
              'aria-label': 'changer date',
            }}
          />
          {submitted && !PlanningFormValidator.validateDate(date) && <p style={{ color: 'red' }}></p>}
          <div className={classes.actionButtons}>
            <button onClick={onClose} className={classes.closeButton}>
              Annuler
            </button>
            <button onClick={handleSave} className={classes.saveButton}>
              Enregistrer
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AddRecipeModal;
