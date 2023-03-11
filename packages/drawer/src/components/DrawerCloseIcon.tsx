/** @jsxImportSource @emotion/react */
import { Button } from '@jdesignlab/button';
import { Close } from '@jdesignlab/react-icons';
import { useContext } from 'react';
import { useDrawerStyle } from '../hooks/useDrawerStyle';
import { DrawerContext } from './DrawerContext';

export const DrawerCloseIcon = () => {
  const { drawerProps, setIsOpen } = useContext(DrawerContext);
  const { drawerIconStyle } = useDrawerStyle();
  return (
    <div css={drawerIconStyle(drawerProps.placement)}>
      <Button
        variant="unstyled"
        onClick={e => {
          setIsOpen(false);
        }}
      >
        <Close width={'12px'} />
      </Button>
    </div>
  );
};
