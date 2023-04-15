/** @jsxImportSource @emotion/react */
import { filterComponent } from '@jdesignlab/react-utils';
import { PopoverProvider } from './PopoverContext';
import { PopoverHeader } from './PopoverHeader';
import { PopoverTrigger } from './PopoverTrigger';
import { PopoverBody } from './PopoverBody';
import { popoverFooter } from './PopoverFooter';
import { PopoverContainer } from './PopoverContainter';
import type { PopoverProps } from '../types';

export const Popover = (props: PopoverProps) => {
  const { children } = props;

  const Trigger = filterComponent(children, Popover.Trigger, true);
  const RestChildren = filterComponent(children, Popover.Trigger, false);

  return (
    <PopoverProvider popoverProps={props}>
      <PopoverContainer Trigger={Trigger}>{RestChildren}</PopoverContainer>
    </PopoverProvider>
  );
};
Popover.Trigger = PopoverTrigger;
Popover.Header = PopoverHeader;
Popover.Body = PopoverBody;
Popover.Footer = popoverFooter;
