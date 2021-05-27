import React from 'react';
import Modal from '../modal/Modal';
import classes from './ConfirmationDialog.module.css';

interface Props {
  headerText: string;
  bodyText: string;
  isOpen: boolean;
  confirmationButtonText: string;
  onCancelClick: () => void;
  onConfirmClick: () => void;
}

const ConfirmationDialog: React.FC<Props> = ({
  headerText,
  bodyText,
  isOpen,
  confirmationButtonText,
  onCancelClick,
  onConfirmClick,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onCancelClick}>
      <div className={classes.confirmationDialog}>
        <h2>{headerText}</h2>
        <p>{bodyText}</p>
        <div className={classes.actionButtons}>
          <button onClick={onCancelClick} className={classes.cancelButton}>
            Annuler
          </button>
          <button onClick={onConfirmClick} className={classes.confirmButton}>
            {confirmationButtonText}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationDialog;
