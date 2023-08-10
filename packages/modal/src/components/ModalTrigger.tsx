/** @jsxImportSource @emotion/react */
import { Trigger } from '@jdesignlab/react-utils';
import { useContext } from 'react';
import { ModalContext } from '../context';
import { ModalTriggerProps } from '../types';

export const ModalTrigger = (props: ModalTriggerProps) => {
  const { children } = props;
  const { id, onOpen } = useContext(ModalContext);

  return (
    <Trigger onClick={onOpen} id={`modal-${id}`}>
      {children}
    </Trigger>
  );
};

ModalTrigger.displayName = 'Modal.Trigger';
