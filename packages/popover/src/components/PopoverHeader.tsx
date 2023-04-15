/** @jsxImportSource @emotion/react */
import {Close} from '@jdesignlab/react-icons'
import { useContext } from 'react';
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
          <Close width="12" height="12" strokeWidth="4" />
        </Button>
      </Flex>
    </header>
  );
};
