/** @jsxImportSource @emotion/react */
import type { PopoverProps } from './popoverTypes';
import { usePopover } from './usePopover';
import { PopoverProvider } from './components/PopoverContext';
import { PopoverHeader } from './components/PopoverHeader';
import { PopoverTrigger } from './components/PopoverTrigger';
import { PopoverBody } from './components/PopoverBody';
import { popoverFooter } from './components/PopoverFooter';
import { PopoverContainer } from './components/PopoverContainter';

export const Popover = (props: PopoverProps) => {
  const { getChildren } = usePopover();
  const { children } = props;

  const Trigger = getChildren(children, Popover.Trigger, true);
  const RestChildren = getChildren(children, Popover.Trigger, false);

  return (
    <PopoverProvider popoverProps={props}>
      <Popover.Contatiner Trigger={Trigger}>{RestChildren}</Popover.Contatiner>
    </PopoverProvider>
  );
};
Popover.Contatiner = PopoverContainer;
Popover.Trigger = PopoverTrigger;
Popover.Header = PopoverHeader;
Popover.Body = PopoverBody;
Popover.Footer = popoverFooter;
