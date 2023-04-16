/** @jsxImportSource @emotion/react */
import { tooltipWrapperStyle } from '../styles';
import type { TooltipProps } from '../types';
import { useState } from 'react';
import TooltipContext from '../context';
import Target from './TooltipTarget';
import Content from './TooltipContent';

export const Tooltip = (props: TooltipProps) => {
  const { children } = props;
  const [targetWidth, setTargetWidth] = useState<number>(0);
  const [targetHeight, setTargetHeight] = useState<number>(0);
  const [isHovering, setIsHovering] = useState(false);
  const gap = Number(props.gap) || 2;

  const providerValue = { targetWidth, targetHeight, setTargetWidth, setTargetHeight, gap, isHovering, setIsHovering };
  return (
    <TooltipContext.Provider value={providerValue}>
      <div css={tooltipWrapperStyle}>{children}</div>
    </TooltipContext.Provider>
  );
};

Tooltip.displayName = 'Tooltip';
Tooltip.Target = Target;
Tooltip.Content = Content;
