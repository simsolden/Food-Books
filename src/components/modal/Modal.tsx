import React, { ReactNode } from 'react';
import Backdrop from '../backdrop/Backdrop';
import classes from './Modal.module.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  return (
    <>
      <Backdrop show={isOpen} clicked={onClose} />
      <div
        className={classes.modal}
        style={{
          transform: isOpen ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: isOpen ? '1' : '0',
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
