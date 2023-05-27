/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { ModalContext } from '../context';
import type { ModalTriggerProps } from '../types';

export const Trigger = (props: ModalTriggerProps) => {
  const { setOpen, isOpen } = useContext(ModalContext);
  const { children } = props;

  const onToggleModal = () => {
    setOpen(prev => !prev);
  };

  return (
    <div
      onClick={onToggleModal}
      css={{ display: 'inline-block' }}
      className={`modal_trigger ${isOpen ? 'trigger_open' : 'trigger_close'}`}
    >
      {children}
    </div>
  );
};

Trigger.displayName = 'Modal.Trigger';
