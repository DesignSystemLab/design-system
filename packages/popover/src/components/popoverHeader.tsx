/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { ClearableIcon } from '@jdesignlab/theme';
import { Flex } from '@jdesignlab/flex';
import { Button } from '@jdesignlab/button';
import { PopoverProps } from '../popoverTypes';
import { PopoverContext } from './popoverContext';

export const PopoverHeader = (props: PopoverProps) => {
  const context = useContext(PopoverContext);
  return (
    <header css={context?.style.headerStyleProps}>
      <Flex direction="row" items="center" justify="space-between">
        <h1>{props.children}</h1>
        <Button
          variant="unstyled"
          onClick={e => {
            context?.setIsOpen(false);
          }}
        >
          <ClearableIcon />
        </Button>
      </Flex>
    </header>
  );
};
