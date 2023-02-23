/** @jsxImportSource @emotion/react */
import type { PopoverProps } from './popoverTypes';
import { usePopover } from './usePopover';
import { PopoverProvider } from './components/popoverContext';
import { PopoverHeader } from './components/popoverHeader';
import { PopoverTrigger } from './components/popoverTrigger';
import { PopoverBody } from './components/popoverBody';
import { popoverFooter } from './components/popoverFooter';
import { PopoverContainer } from './components/popoverContainter';

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
