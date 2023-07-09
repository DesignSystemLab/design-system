import { useState } from 'react';
import { Button } from '@jdesignlab/button';
import { Flex } from '@jdesignlab/flex';
import { Box } from '../../box';
import { Popover } from '../src';

export default {
  title: 'actions/Popover',
  component: Popover,
  decorators: [Story => <Story />]
};

const argTypes = {};

const Template = args => {
  return (
    <Flex items="center" justify="center" style={{ height: '256px' }}>
      <Popover {...args}>
        <Popover.Trigger>
          <Button>Basic Popover</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Header>Header</Popover.Header>
          <Popover.Body>Content</Popover.Body>
          <Popover.Footer>Footer</Popover.Footer>
        </Popover.Content>
      </Popover>
    </Flex>
  );
};

export const Basic = Template.bind({});
Basic.argTypes = argTypes;

export const Placement = () => {
  const [isOpen, setPopoverOpen] = useState(false);
  return (
    <Flex items="center" justify="center" style={{ height: '240px' }}>
      <Popover
        placement="right"
        open={isOpen}
        onOpen={() => {
          setPopoverOpen(true);
        }}
        onClose={() => {
          setPopoverOpen(false);
        }}
      >
        <Popover.Trigger>
          <Button color="blue-lighten2">Right</Button>
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
    </Flex>
  );
};

export const Arrow = () => {
  const [isOpen, setPopoverOpen] = useState(false);
  return (
    <Flex items="center" justify="center" style={{ height: '240px' }}>
      <Popover
        arrow={false}
        open={isOpen}
        onOpen={() => {
          setPopoverOpen(true);
        }}
        onClose={() => {
          setPopoverOpen(false);
        }}
      >
        <Popover.Trigger>
          <Button color="secondary-500">Non Arrow Popover</Button>
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
    </Flex>
  );
};
