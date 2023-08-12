import { css } from '@emotion/react';
import { SEMATIC_COLOR_HOVER, SHADOW_MODAL, Z_INDEX_MODAL } from '@jdesignlab/theme';

export const portal = (width: number, height: number) => {
  return css({
    zIndex: Z_INDEX_MODAL,
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'block',
    background: 'white',
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: '6px',
    padding: '12px',
    boxShadow: SHADOW_MODAL
  });
};

export const closeIconWrapper = css({
  position: 'absolute',
  right: '6px',
  top: '6px',
  width: '24px',
  height: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px',
  borderRadius: '100%',
  cursor: 'pointer',
  '&:hover': {
    background: SEMATIC_COLOR_HOVER
  }
});

export const closeIcon = css({
  padding: 0
});
