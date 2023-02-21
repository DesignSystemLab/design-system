import { Button } from '@jdesignlab/button';
import { Flex } from '@jdesignlab/flex';
import { Popover } from '../src';

export default {
  title: 'Components/Popover',
  component: Popover,
  decorators: [Story => <Story style={{ margin: 'auto 0' }} />]
};

const argTypes = {};

const Template = args => (
  <>
    <Flex direction="column" items="center" justify="center">
      <h2>Popover</h2>
      <Popover {...args}>
        <Popover.Trigger>
          <Button color="blue-lighten2">Trigger</Button>
        </Popover.Trigger>
        <Popover.Header>Confirm</Popover.Header>
        <Popover.Body>안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.</Popover.Body>
        <Popover.Footer>
          <Flex gap="8px" justify="flex-end" items="center">
            <Button size="sm" color="shades-white">
              Cancel
            </Button>
            <Button size="sm" color="blue-lighten2">
              Apply
            </Button>
          </Flex>
        </Popover.Footer>
      </Popover>
    </Flex>
  </>
);

export const PopoverBasic = Template.bind({});
PopoverBasic.argTypes = argTypes;
