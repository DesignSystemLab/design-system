/** @jsxImportSource @emotion/react */
import { tooltipWrapperStyle } from '../styles';
import type { TooltipProps } from '../types';
import { useState, useRef } from 'react';
import TooltipContext from '../context';
import Target from './TooltipTarget';
import Content from './TooltipContent';

export const Tooltip = (props: TooltipProps) => {
  const { children } = props;
  const [isHovering, setIsHovering] = useState(false);
  const gap = Number(props.gap) ?? 4;

  const providerValue = {
    targetRef: useRef(null),
    placement: props.placement ?? 'top',
    gap,
    isHovering,
    setIsHovering
  };
  return (
    <TooltipContext.Provider value={providerValue}>
      <div css={tooltipWrapperStyle}>{children}</div>
    </TooltipContext.Provider>
  );
};

Tooltip.displayName = 'Tooltip';
Tooltip.Target = Target;
Tooltip.Content = Content;
