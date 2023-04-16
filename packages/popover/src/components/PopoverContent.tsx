/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { PopoverContext } from './PopoverContext';
import { POPOVER_BACKGROUND, POPOVER_BORDER_COLOR } from '../constants';
import usePopoverEffect from '../hooks/usePopoverEffect';
import useInitialRender from '../hooks/useInitialRender';
import createPopoverStyle from '../styles/createPopoverStyle';

export const PopoverContent = (props: { children: React.ReactNode }) => {
  const isInitialRendered = useInitialRender();
  const context = useContext(PopoverContext);
  const { placement, arrow } = context.popoverProps;
  const popoverContentStyle = createPopoverStyle(placement, arrow, POPOVER_BACKGROUND, POPOVER_BORDER_COLOR);
  usePopoverEffect(context, isInitialRendered);

  return context.isOpen ? <div css={popoverContentStyle}>{props.children}</div> : null;
};
