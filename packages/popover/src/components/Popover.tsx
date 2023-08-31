/** @jsxImportSource @emotion/react */
import { filterComponent } from '@jdesignlab/react-utils';
import { createClassVariant } from '@jdesignlab/theme';
import { PopoverProvider } from './PopoverProvider';
import { PopoverHeader } from './PopoverHeader';
import { PopoverTrigger } from './PopoverTrigger';
import { PopoverBody } from './PopoverBody';
import { popoverFooter } from './PopoverFooter';
import { PopoverContent } from './PopoverContent';
import type { PopoverProps } from '../types';

export const Popover = (props: PopoverProps) => {
  const { children, ...restProps } = props;
  const Trigger = filterComponent(children, Popover.Trigger, true);
  const PopoverContents = filterComponent(children, Popover.Trigger, false);

  return (
    <PopoverProvider popoverProps={restProps}>
      <div className={createClassVariant('popover', 'wrapper')} css={{ position: 'relative', display: 'inline' }}>
        {Trigger}
        {PopoverContents}
      </div>
    </PopoverProvider>
  );
};

Popover.displayName = 'Popover';
Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
Popover.Header = PopoverHeader;
Popover.Body = PopoverBody;
Popover.Footer = popoverFooter;
