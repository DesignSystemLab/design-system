/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { DrawerContext } from './DrawerContext';
import { useDrawerStyle } from '../hooks/useDrawerStyle';
import { Button } from '@jdesignlab/button';
import { Close } from '@jdesignlab/react-icons';

export const DrawerCloseIcon = () => {
  const { drawerProps, setOpen } = useContext(DrawerContext);
  const { drawerIconStyle } = useDrawerStyle();

  return (
    <div css={drawerIconStyle(drawerProps.placement)}>
      <Button
        variant="unstyled"
        onClick={() => {
          setOpen(false);
        }}
      >
        <Close width={'12px'} />
      </Button>
    </div>
  );
};
