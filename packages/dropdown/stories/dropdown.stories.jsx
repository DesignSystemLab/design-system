import { Dropdown } from '../src';
import { Button } from '@jdesignlab/button';
import { Flex } from '@jdesignlab/flex';
import { ChevronRight, Checkmark } from '@jdesignlab/react-icons';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  decorators: [Story => <Story />]
};

const argTypes = {};

const Template = args => <Dropdown {...args} />;

export const DropdownBasic = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '200px',
      alignItems: 'start',
      width: '100vw',
      height: '100vh',
      transform: 'translate(100px, 100px)'
      // backgroundImage: 'radial-gradient(#e2e5d6 2px, transparent 2px), radial-gradient(#e2e5d6 2px, transparent 2px)',
      // backgroundPosition: '0 0, 32px 32px',
      // backgroundSize: '64px 64px',
      // backgroundColor: '#47d3ff'
    }}
  >
    <Dropdown gap={4} mode="click" on="right">
      <Dropdown.Trigger>
        <Button color="lime-lighten5" />
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.MenuItem
          onClick={() => {
            alert('clicked');
          }}
        >
          <Flex justify="space-between" items="center">
            <div>첫번째입니다</div>
            <Checkmark width={15} />
          </Flex>
        </Dropdown.MenuItem>
        <Dropdown.Divider />
        <Dropdown.MenuItem
          onClick={() => {
            alert('clicked');
          }}
        >
          <Flex justify="space-between" items="center">
            <div>두번째</div>
            <Checkmark width={15} />
          </Flex>
        </Dropdown.MenuItem>
        <Dropdown.MenuItem
          onClick={() => {
            alert('clicked');
          }}
        >
          <Flex justify="space-between" items="center">
            <div>세번째입니다</div>
            <Checkmark width={15} />
          </Flex>
        </Dropdown.MenuItem>
        <Dropdown.MenuItem
          onClick={() => {
            alert('clicked');
          }}
        >
          <div>1</div>
        </Dropdown.MenuItem>

        {/* <Dropdown.MenuItem>
          <Flex justify="space-between" items='center'>
            <div>1</div>
            <div>
              <ChevronRight height={16} />
            </div>
          </Flex>
          <Dropdown.Menu>
            <Dropdown.MenuItem>sub1</Dropdown.MenuItem>
            <Dropdown.MenuItem>sub2</Dropdown.MenuItem>
          </Dropdown.Menu>
        </Dropdown.MenuItem> */}

        <Dropdown.Divider />
        <Dropdown.MenuItem disabled>이건 disabled</Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown mode="hover">
      <Dropdown.Trigger>
        <Button color="lime-lighten5" />
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.MenuItem
          onClick={() => {
            alert('clicked');
          }}
        >
          <Flex justify="space-between" items="center">
            <div>첫번째입니다</div>
            <Checkmark width={15} />
          </Flex>
        </Dropdown.MenuItem>
        <Dropdown.Divider />
        <Dropdown.MenuItem
          onClick={() => {
            alert('clicked');
          }}
        >
          <Flex justify="space-between" items="center">
            <div>두번째</div>
            <Checkmark width={15} />
          </Flex>
        </Dropdown.MenuItem>
        <Dropdown.MenuItem
          onClick={() => {
            alert('clicked');
          }}
        >
          <Flex justify="space-between" items="center">
            <div>세번째입니다</div>
            <Checkmark width={15} />
          </Flex>
        </Dropdown.MenuItem>
        <Dropdown.MenuItem
          onClick={() => {
            alert('clicked');
          }}
        >
          <div>1</div>
        </Dropdown.MenuItem>

        <Dropdown.Divider />
        <Dropdown.MenuItem disabled>이건 disabled</Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  </div>
);
