/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { ModalContext } from '../context';
import type { ModalTriggerProps } from '../types';

export const Trigger = (props: ModalTriggerProps) => {
  const { setOpen } = useContext(ModalContext);
  const { children, open, close, onOpen, onClose } = props;

  const onClickModalOpen = () => {
    if (!close) {
      onOpen && onOpen();
      setOpen(true); // Trigger default
    } else {
      onClose && onClose();
      setOpen(false);
    }
  };

  return (
    <div onClick={onClickModalOpen} className={`modal_trigger ${close ? 'trigger_close' : 'trigger_open'}`}>
      {children}
    </div>
  );
};

Trigger.displayName = 'Modal.Trigger';
