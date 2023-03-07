import { css } from '@emotion/react';
import { getColorByToken, hexToRgba } from '@jdesignlab/theme';
import { Placement } from '../types';

export const useDrawerStyle = () => {
  const drawerOverlayStyle = css({
    zIndex: '999',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: `${hexToRgba(getColorByToken('shades-black'), 0.1)}`
  });

  const drawerContentStyle = (placement: Placement) => {
    if (placement === 'left' || placement == 'right') {
      return css({
        overflow: 'auto',
        zIndex: '1000',
        padding: '16px',
        backgroundColor: `${getColorByToken('shades-white')}`,
        position: 'absolute',
        [placement]: '0',
        width: '304px',
        height: '100vh'
      });
    }
    return css({
      zIndex: '1000',
      padding: '16px',
      overflow: 'auto',
      backgroundColor: `${getColorByToken('shades-white')}`,
      position: 'absolute',
      [placement]: '0',
      width: '100vw',
      minHeight: '128px',
      maxHeight: '512px'
    });
  };

  const drawerIconStyle = (placement: Placement) => {
    if (placement === 'left' || placement == 'right') {
      return css({
        position: 'absolute',
        right: '0',
        top: '8px'
      });
    }
    return css({
      position: 'absolute',
      right: '44px'
    });
  };

  const drawerFlex = () => {
    return css({
      display: 'flex',
      flexDirection: 'column'
    });
  };

  const drawerFlexGrow = (grow: number) => {
    return css({
      flexGrow: `${grow}`
    });
  };

  return {
    drawerOverlayStyle,
    drawerFlex,
    drawerFlexGrow,
    drawerContentStyle,
    drawerIconStyle
  };
};
