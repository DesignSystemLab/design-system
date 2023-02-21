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
  background: `${hexToRgba(getColorByToken('shades-black'), 0.3)}`
});

export const modalWrapperStyle = (width: number | undefined) => {
  const customWidth = `${width || 600}px`;
  return css({
    zIndex: 1000,
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: getColorByToken('grey-lighten5'),
    display: 'flex',
    flexDirection: 'column',
    border: 'solid gray 1px',
    width: customWidth,
    boxShadow: '0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)',
    borderRadius: '10px'
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
