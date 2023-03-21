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
      height: '100vh'
      // transform: 'translate(100px, 100px)'
    }}
  >
    <Dropdown gap={4} placement="right" lazy>
      <Dropdown.Trigger>
        <Button color="lime-lighten5">lazy</Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.MenuItem
          onClick={() => {
            alert('clicked');
          }}
        >
          <div>첫번째입니다</div>
        </Dropdown.MenuItem>
        <Dropdown.Divider />
        <Dropdown.MenuItem
          onClick={() => {
            alert('clicked');
          }}
        >
          <div>두번째</div>
        </Dropdown.MenuItem>

        <Dropdown.MenuItem
          onClick={() => {
            alert('clicked');
          }}
        >
          <div>세번째입니다</div>
        </Dropdown.MenuItem>

        <Dropdown.MenuItem sub>
          <Flex justify="space-between" items="center">
            <div>서브메뉴입니다</div>
            <ChevronRight height={16} />
          </Flex>
          <Dropdown.SubMenu>
            <Dropdown.SubMenuItem>첫번째sub1</Dropdown.SubMenuItem>
            <Dropdown.SubMenuItem>sub2</Dropdown.SubMenuItem>
            <Dropdown.SubMenuItem>sub3</Dropdown.SubMenuItem>
            <Dropdown.SubMenuItem>sub4</Dropdown.SubMenuItem>
            <Dropdown.SubMenuItem disabled>sub5</Dropdown.SubMenuItem>
            <Dropdown.SubMenuItem>sub6</Dropdown.SubMenuItem>
          </Dropdown.SubMenu>
        </Dropdown.MenuItem>

        <Dropdown.MenuItem sub>
          <Flex justify="space-between" items="center">
            <div>서브메뉴하나더</div>
            <ChevronRight height={16} />
          </Flex>
          <Dropdown.SubMenu>
            <Dropdown.SubMenuItem>첫번째sub1</Dropdown.SubMenuItem>
            <Dropdown.SubMenuItem>sub2</Dropdown.SubMenuItem>
          </Dropdown.SubMenu>
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
    <Dropdown gap={4} placement="right">
      <Dropdown.Trigger>
        <Button color="lime-lighten5">click</Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.MenuItem
          onClick={() => {
            alert('clicked');
          }}
        >
          <div>첫번째입니다</div>
        </Dropdown.MenuItem>
        <Dropdown.Divider />
        <Dropdown.MenuItem
          onClick={() => {
            alert('clicked');
          }}
        >
          <div>두번째</div>
        </Dropdown.MenuItem>

        <Dropdown.MenuItem
          onClick={() => {
            alert('clicked');
          }}
        >
          <div>세번째입니다</div>
        </Dropdown.MenuItem>

        <Dropdown.MenuItem sub>
          <Flex justify="space-between" items="center">
            <div>서브메뉴입니다</div>
            <ChevronRight height={16} />
          </Flex>
          <Dropdown.SubMenu>
            <Dropdown.SubMenuItem>첫번째sub1</Dropdown.SubMenuItem>
            <Dropdown.SubMenuItem>sub2</Dropdown.SubMenuItem>
            <Dropdown.SubMenuItem>sub3</Dropdown.SubMenuItem>
            <Dropdown.SubMenuItem>sub4</Dropdown.SubMenuItem>
            <Dropdown.SubMenuItem disabled>sub5</Dropdown.SubMenuItem>
            <Dropdown.SubMenuItem>sub6</Dropdown.SubMenuItem>
          </Dropdown.SubMenu>
        </Dropdown.MenuItem>

        <Dropdown.MenuItem sub>
          <Flex justify="space-between" items="center">
            <div>서브메뉴하나더</div>
            <ChevronRight height={16} />
          </Flex>
          <Dropdown.SubMenu>
            <Dropdown.SubMenuItem>첫번째sub1</Dropdown.SubMenuItem>
            <Dropdown.SubMenuItem>sub2</Dropdown.SubMenuItem>
          </Dropdown.SubMenu>
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
