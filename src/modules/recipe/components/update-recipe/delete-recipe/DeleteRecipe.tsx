import React from 'react';
import ConfirmationDialog from '../../../../../components/confirmation-dialog/ConfirmationDialog';

interface Props {
  isOpen: boolean;
  onDelete: () => void;
  onCancel: () => void;
}

const DeleteRecipe: React.FC<Props> = ({ isOpen, onDelete, onCancel }) => {
  return (
    <ConfirmationDialog
      headerText="Supprimer la recette"
      bodyText="Êtes vous sûr ? Cette action est irréversible."
      confirmationButtonText="Supprimer"
      isOpen={isOpen}
      onCancelClick={onCancel}
      onConfirmClick={onDelete}
    />
  );
};

export default DeleteRecipe;
