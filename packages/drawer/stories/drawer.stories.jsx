import { ThemeProvider } from '@jdesignlab/j-provider';
import { Button } from '@jdesignlab/button';
import { Flex } from '@jdesignlab/flex';
import { Drawer } from '../src';
import { useState } from 'react';

export default {
  title: 'Components/Drawer',
  component: Drawer,
  decorators: [Story => <Story style={{ margin: 'auto 0' }} />]
};

const argTypes = {};

const Template = args => {
  const [open, setDrawerOpen] = useState(false);

  return (
    <>
      <ThemeProvider>
        <Button
          onClick={e => {
            setDrawerOpen(true);
          }}
        >
          OPEN Drawer.
        </Button>
        <Drawer
          {...args}
          open={open}
          onClose={() => {
            console.log('Drawer 닫힘.');
            setDrawerOpen(false);
          }}
          onOpen={() => {
            console.log('Drawer 열림.');
            setDrawerOpen(true);
          }}
        >
          <Drawer.Content>
            <Drawer.Header>Header</Drawer.Header>
            <Drawer.Body>
              <h3>Body</h3>
              <p>본문내용</p>
              <p>본문내용</p>
              <p>본문내용</p>
            </Drawer.Body>
            <Drawer.Footer>
              <Flex justify="space-around" items="center">
                <div>
                  <Button
                    color="red-base"
                    onClick={e => {
                      setDrawerOpen(false);
                    }}
                  >
                    닫기
                  </Button>
                </div>
                <div>
                  <Button color="blue-base">저장</Button>
                </div>
              </Flex>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer>
      </ThemeProvider>
    </>
  );
};

export const DrawerBasic = Template.bind({});
DrawerBasic.argTypes = argTypes;
