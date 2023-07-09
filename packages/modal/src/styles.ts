import { css } from '@emotion/react';
import type { ColorToken } from '@jdesignlab/theme';
import { getColorByToken, hexToRgba } from '@jdesignlab/theme';

export const modalOverlayStyle = css({
  zIndex: 999,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: `${hexToRgba(getColorByToken('shades-black'), 0.25)}`
});

export const modalWrapperStyle = (width: number | undefined) => {
  const customWidth = `${width || 500}px`;
  return css({
    zIndex: 1000,
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: getColorByToken('shades-white'),
    display: 'flex',
    flexDirection: 'column',
    width: customWidth,
    boxShadow:
      'rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px',
    borderRadius: '8px',
    '&.modal_open': {
      display: 'flex'
    },
    '&.modal_open + .modal_overlay': {
      display: 'block'
    },
    '&.modal_close': {
      display: 'none'
    },
    '&.modal_close + .modal_overlay': {
      display: 'none'
    }
  });
};

const modalContentCommonStyle = {
  display: 'block',
  padding: '16px 24px'
};

export const modalHeaderStyle = css({
  display: 'flex',
  padding: '16px 24px',
  alignItems: 'baseline',
  position: 'relative',
  minHeight: '40px',
  '& .header_icon': { marginLeft: 'auto', cursor: 'pointer' }
});

export const modalBodyStyle = css({
  ...modalContentCommonStyle,
  flex: 2
});
export const modalFooterStyle = css({
  ...modalContentCommonStyle,
  minHeight: '40px'
});
