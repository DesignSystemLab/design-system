import { css } from '@emotion/react';
import { SEMATIC_COLOR_HOVER, SHADOW_MODAL, Z_INDEX_MODAL } from '@jdesignlab/theme';
import { Placement } from './types';

export const portal = (width: number, height: number, placement: Placement, full: boolean) => {
  const padding = 12;
  const adjustedWidth = full ? window.innerWidth - padding * 2 : width;
  const adjustedHeight = full ? window.innerHeight - padding * 2 : height;

  const position = {
    right: {
      right: `-${padding}px`,
      transform: `translateX(${adjustedWidth + padding * 3}px)`,
      transition: 'transform .2s ease-in-out',
      top: 0,
      height: '100vh',
      width: adjustedHeight,
      '&.open': {
        transform: `translateX(-${padding}px)`
      }
    },
    left: {
      left: `-${adjustedWidth + padding * 3}px`,
      transition: 'transform .2s ease-in-out',
      top: 0,
      height: '100vh',
      width: adjustedWidth,
      '&.open': {
        transform: `translateX(${adjustedWidth + padding * 3}px)`
      }
    },
    top: {
      top: `-${adjustedHeight + padding * 4}px`,
      left: 0,
      width: `calc(100vw - ${padding * 2}px)`,
      boxShadow: 'none',
      height: adjustedHeight,
      '&.open': {
        transform: `translateY(${adjustedHeight + padding * 4}px)`
      }
    },
    bottom: {
      bottom: `-${adjustedHeight + padding * 2}px`,
      left: 0,
      width: `calc(100vw - ${padding * 2}px)`,
      height: adjustedHeight,
      '&.open': {
        transform: `translateY(-${adjustedHeight + padding * 2}px)`
      }
    }
  };
  return css({
    zIndex: Z_INDEX_MODAL,
    position: 'fixed',
    ...position[placement],
    background: 'white',
    padding: `${padding}px`,
    boxShadow: SHADOW_MODAL,
    transition: 'all .2s ease-in-out'
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
