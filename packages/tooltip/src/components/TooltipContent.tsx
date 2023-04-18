/** @jsxImportSource @emotion/react */
import { tooltipContentStyle } from '../styles';
import { calculateElementPosition } from '@jdesignlab/react-utils';
import { css } from '@emotion/react';
import type { TooltipContentProps } from '../types';
import { useRef, useContext } from 'react';
import TooltipContext from '../context';
import { getCoponentText } from '@jdesignlab/react-utils';

const Content = (props: TooltipContentProps) => {
  const { id, targetRef, placement, isHovering, gap, ...otherProps } = useContext(TooltipContext);
  const { children, style } = props;
  const contentRef = useRef<HTMLDivElement>(null);
  const position = calculateElementPosition(targetRef, contentRef, placement, gap);
  const contentStyle = css(position, tooltipContentStyle, style ?? {});
  const contentText = getCoponentText(children);

  return (
    <span
      css={contentStyle}
      ref={contentRef}
      role="tooltip"
      id={id}
      aria-label={contentText}
      aria-expanded={isHovering ? true : false}
      className={`${isHovering ? 'tooltip_open' : 'tooltip_close'}`}
    >
      {children}
    </span>
  );
};

Content.displayName = 'Tooltip.Content';
export default Content;
