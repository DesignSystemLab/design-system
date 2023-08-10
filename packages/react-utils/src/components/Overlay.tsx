/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ClassNameVariant, SEMATIC_COLOR_OVERLAY, Z_INDEX_OVERLAY } from '@jdesignlab/theme';

interface OverlayProps {
  onClick?(): void;
  className?: ClassNameVariant;
}

const overlayStyle = css({
  zIndex: Z_INDEX_OVERLAY,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: SEMATIC_COLOR_OVERLAY
});

export const Overlay = (props: OverlayProps) => {
  const { onClick, ...rest } = props;
  return <div onClick={onClick} role="none" css={overlayStyle} {...rest}></div>;
};
