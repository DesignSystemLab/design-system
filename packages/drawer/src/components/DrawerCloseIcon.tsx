/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { DrawerContext } from './DrawerContext';
import iconStyle from '../styles/createIconStyle';
import { Button } from '@jdesignlab/button';
import { Close } from '@jdesignlab/react-icons';

export const DrawerCloseIcon = () => {
  const { drawerProps, setOpen } = useContext(DrawerContext);
  return (
    <div css={iconStyle(drawerProps.placement)}>
      <Button
        role="button"
        aria-label="Close Button"
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
