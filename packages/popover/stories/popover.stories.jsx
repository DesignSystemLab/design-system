import { useState } from 'react';
import { Button } from '@jdesignlab/button';
import { Flex } from '@jdesignlab/flex';
import { Popover } from '../src';

export default {
  title: 'Components/Popover',
  component: Popover,
  decorators: [Story => <Story style={{ margin: 'auto 0' }} />]
};

const argTypes = {};

const Template = args => {
  return (
    <>
      <Flex direction="column" items="center" justify="center" gap="8px">
        <h2>Popover</h2>
        <Popover {...args}>
          <Popover.Trigger>
            <Button>Basic Popover</Button>
          </Popover.Trigger>
          <Popover.Content>
            <Popover.Header>Header</Popover.Header>
            <Popover.Body>Header</Popover.Body>
            <Popover.Footer>Footer</Popover.Footer>
          </Popover.Content>
        </Popover>
      </Flex>
    </>
  );
};

export const PopoverExample = () => {
  const [isOpen, setPopoverOpen] = useState(false);
  return (
    <Popover
      open={isOpen}
      onOpen={() => {
        setPopoverOpen(true);
        alert('open');
      }}
      onClose={() => {
        setPopoverOpen(false);
        alert('close');
      }}
    >
      <Popover.Trigger>
        <Button color="blue-lighten2">Trigger</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Header>Confirm</Popover.Header>
        <Popover.Body>Popover Content</Popover.Body>
        <Popover.Footer>
          <Flex gap="8px" justify="flex-end" items="center">
            <Button
              size="sm"
              color="shades-white"
              onClick={e => {
                setPopoverOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button size="sm" color="blue-lighten2">
              Apply
            </Button>
          </Flex>
        </Popover.Footer>
      </Popover.Content>
    </Popover>
  );
};

export const PopoverBasic = Template.bind({});
PopoverBasic.argTypes = argTypes;
