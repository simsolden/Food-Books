import React, { useEffect, useState } from 'react';
import { KeyboardDateTimePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

import classes from './UpdateRecipeModal.module.css';
import { PlanningFormValidator } from '../../validators/PlanningFormValidator';

interface Props {
  onClose: () => void;
  onSave: (date: Date) => void;
  onDelete: () => void;
  recipeDate: Date;
}

const UpdateRecipeModal: React.FC<Props> = ({ onClose, onSave, onDelete, recipeDate }) => {
  const [date, setDate] = useState(recipeDate);
  const [submitted, setSubmitted] = useState(false);
  const [isRecipeSaved, setIsRecipeSaved] = useState(false);

  useEffect(() => {});

  const handleChange = (date: MaterialUiPickersDate) => {
    date && setDate(date);
  };

  const handleSave = () => {
    setSubmitted(true);
    if (PlanningFormValidator.validateDate(date)) {
      onSave(date);
      setIsRecipeSaved(true);
      setTimeout(() => setIsRecipeSaved(false), 2000);
    }
  };

  const handleDelete = () => {
    if (window.confirm('Supprimer la recette ?')) {
      onDelete();
      setIsRecipeSaved(true);
      setTimeout(() => setIsRecipeSaved(false), 2000);
    }
  };

  return (
    <div className={classes.recipeModal}>
      {isRecipeSaved ? (
        <p>Changements enregistrés !</p>
      ) : (
        <>
          <p className={classes.title}>Modifier la date</p>
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
            <button title="supprimer" onClick={handleDelete} className={classes.deleteButton}>
              Supprimer
            </button>
            <button title="enregistrer" onClick={handleSave} className={classes.saveButton}>
              Enregistrer
            </button>
          </div>
        </>
      )}
      <button title="annuler" onClick={onClose} className={classes.closeButton}>
        &#10006;
      </button>
    </div>
  );
};

export default UpdateRecipeModal;
