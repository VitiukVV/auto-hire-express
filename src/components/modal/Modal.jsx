import React from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent } from './Modal.styled';
import { useEffect } from 'react';
import { useCallback } from 'react';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape' || e.currentTarget === e.target) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return createPortal(
    <ModalBackdrop onClick={handleKeyDown}>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};

export default Modal;
