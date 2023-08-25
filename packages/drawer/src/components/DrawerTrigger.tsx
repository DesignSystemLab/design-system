/** @jsxImportSource @emotion/react */
import { Trigger } from '@jdesignlab/react-utils';
import { useContext } from 'react';
import { DrawerContext } from '../context';

export const DrawerTrigger = (props: any) => {
  const { children } = props;
  const { id, onOpen } = useContext(DrawerContext);

  return (
    <Trigger onClick={onOpen} id={`drawer-${id}`}>
      {children}
    </Trigger>
  );
};

DrawerTrigger.displayName = 'Drawer.Trigger';
