import { css, keyframes } from '@emotion/react';
import type { ColorToken } from '@jdesignlab/theme';
import { getColorByToken, hexToRgba } from '@jdesignlab/theme';
import React, { useCallback } from 'react';

export const dropdownWrapperStyle = css({
  position: 'relative'
});

export const dropdownOverlayStyle = css({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh'
});

const shadowDrop = keyframes`
0% {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}
100% {
  box-shadow: 10.5px 10.5px 15px -4.5px rgba(100,100,100,0.2);
}
`;
export const dropdownMenuStyle = css({
  // ul
  position: 'absolute',
  zIndex: 100,
  minWidth: '220px',
  margin: 0,
  background: 'rgba(255,255,255,0.5)',
  backdropFilter: 'blur(20px)',
  display: 'flex',
  flexDirection: 'column', // TODO <ul></ul>??
  border: 'solid lightgray 1px',
  borderRadius: '6px',
  padding: '5px',
  boxShadow: '10.5px 10.5px 15px -4.5px rgba(100,100,100,0.2)',
  '&.menu_open': {
    display: 'flex'
  },
  '&.menu_close': {
    display: 'none'
  }
  // animation: `${shadowDrop} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
});

export const dropdownItemStyle = (disabled: boolean) => {
  return css({
    position: 'relative',
    padding: '5px',
    borderRadius: '4px',
    listStyle: 'none',
    cursor: 'pointer',
    color: `${disabled ? 'lightgrey' : 'black'}`,
    '&:hover': {
      background: `${disabled ? '' : 'rgba(100,100,100,.1)'}`,
      cursor: `${disabled ? 'not-allowed' : 'pointer'}`
    }
  });
};

export const dropdownDividerStyle = css({
  height: 0,
  width: '100%',
  margin: '5px 0',
  borderTop: '#e0e0e0 solid 0.5px'
});

export const dropdownLocationStyle = (
  labelRef: React.RefObject<HTMLUListElement>,
  triggerWidth: number,
  triggerHeight: number,
  gap: number,
  placement: string | undefined
) => {
  const labelWidth = labelRef.current ? labelRef.current.offsetWidth : 0;
  const labelHeight = labelRef.current ? labelRef.current.offsetHeight : 0;
  const centerX = { left: triggerWidth / 2, transform: `translateX(-${labelWidth / 2}px)` };
  const centerY = { bottom: triggerHeight / 2, transform: `translateY(${labelHeight / 2}px)` };
  const moveTop = { bottom: `${triggerHeight + gap}px` };
  const moveBottom = { top: `${triggerHeight + gap}px` };
  const moveRight = { left: `${triggerWidth + gap}px` };
  const moveLeft = { left: `-${labelWidth + gap}px` };

  switch (placement) {
    case 'top':
      return css({ ...moveTop, ...centerX });
    case 'right':
      return css({ ...moveRight, ...centerY });
    case 'left':
      return css({ ...moveLeft, ...centerY });
    case 'bottom':
      return css({ ...moveBottom, ...centerX });
    default: //top
      return css({ ...moveBottom, ...centerX });
  }
};

export const dropdownSubLocationStyle = (labelRef: React.RefObject<HTMLUListElement>) => {
  const menu = labelRef.current?.closest<HTMLElement>('[role="menu"]');
  const rightSub = {
    left: `${menu?.offsetWidth || 0}px`,
    transform: 'translate(15px, -30px)'
  };
  return css({
    ...rightSub,
    '&.sub_open': {
      display: 'flex'
    },
    '&.sub_close': {
      display: 'none'
    }
  });
};
