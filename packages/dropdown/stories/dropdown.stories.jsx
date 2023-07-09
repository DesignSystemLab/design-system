import { Dropdown } from '../src';
import { Button } from '@jdesignlab/button';
import { Flex } from '@jdesignlab/flex';
import { ChevronRight, Checkmark } from '@jdesignlab/react-icons';

export default {
  title: 'Layout/Dropdown',
  component: Dropdown,
  decorators: [Story => <Story />]
};

const argTypes = {};

const Template = args => <Dropdown {...args} />;

const Space = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '200px',
        alignItems: 'start',
        height: '500px',
        width: '100vw',
        transform: 'translateX(100px)'
      }}
    >
      {children}
    </div>
  );
};

export const Basic = () => (
  <Space>
    <Dropdown gap={4}>
      <Dropdown.Trigger>
        <Button color="lime-lighten5">click</Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.MenuItem
          onClick={e => {
            alert('clicked');
            console.log(e.target.value);
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

        <Dropdown.MenuItem disabled>이건 disabled</Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  </Space>
);
export const hasSubItem = () => (
  <Space>
    <Dropdown gap={4}>
      <Dropdown.Trigger>
        <Button color="lime-lighten5">click</Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.MenuItem
          onClick={e => {
            alert('clicked');
            console.log(e.target.value);
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

        <Dropdown.MenuItem hasSub>
          <Flex justify="space-between" items="center">
            <Flex.Item>
              <div>서브메뉴입니다</div>
            </Flex.Item>
            <Flex.Item>
              <ChevronRight height={16} />
            </Flex.Item>
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

        <Dropdown.MenuItem hasSub>
          <Flex justify="space-between" items="center">
            <Flex.Item>
              <div>서브메뉴하나더</div>
            </Flex.Item>
            <Flex.Item>
              <ChevronRight height={16} />
            </Flex.Item>
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
  </Space>
);
