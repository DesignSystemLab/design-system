import { css } from '@emotion/react';

export const tooltipWrapperStyle = css({
  position: 'relative'
});
export const tooltipContentStyle = css({
  position: 'absolute',
  backgroundColor: '#000000ad',
  color: '#ffffffc7',
  zIndex: '100',
  display: 'none',
  padding: '4px 8px',
  border: 'solid gray 1px',
  borderRadius: '2px',
  whiteSpace: 'pre',
  '&.tooltip_open': {
    display: 'inline'
  }
});

export const tooltipTargetStyle = {};
