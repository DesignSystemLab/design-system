/** @jsxImportSource @emotion/react */
import { tooltipContentStyle } from '../styles';
import type { TooltipContentProps } from '../types';
import { useState, useContext } from 'react';
import TooltipContext from '../context';
import { getComponentText, usePlacementStyle } from '@jdesignlab/react-utils';
import type { PlacementStyleProps } from '@jdesignlab/react-utils';

const Content = (props: TooltipContentProps) => {
  const { id, placement, isHovering, gap, targetEl } = useContext(TooltipContext);
  const { children, style } = props;
  const [contentEl, setContentEl] = useState<HTMLDivElement | null>(null);

  const contentStyleParams: PlacementStyleProps = {
    contentEl,
    triggerEl: targetEl,
    isHovering,
    contentStyle: { ...tooltipContentStyle, ...style },
    placement,
    gap
  };

  return (
    <div
      css={usePlacementStyle(contentStyleParams)}
      ref={setContentEl}
      role="tooltip"
      id={id}
      aria-label={getComponentText(children)}
      aria-expanded={isHovering ? true : false}
      className={`${isHovering ? 'tooltip_open' : 'tooltip_close'}`}
    >
      {children}
    </div>
  );
};

Content.displayName = 'Tooltip.Content';
export default Content;
