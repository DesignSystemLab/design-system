import { Button } from '@jdesignlab/button';
import { Flex } from '@jdesignlab/flex';
import { Drawer } from '../src';
import { useState } from 'react';

export default {
  title: 'actions/Drawer',
  component: Drawer,
  decorators: [Story => <Story />]
};

export const Basic = () => (
  <Drawer hasCloseIcon>
    <Drawer.Trigger>
      <Button>Basic</Button>
    </Drawer.Trigger>
    <Drawer.Portal></Drawer.Portal>
  </Drawer>
);

export const controlled = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}> state이용해서 외부에서 열기</Button>
      <Drawer hasCloseIcon open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
        <Drawer.Trigger>
          <Button>Trigger로</Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Button onClick={() => setOpen(false)}>닫기</Button>
        </Drawer.Portal>
      </Drawer>
    </>
  );
};

export const placement = () => (
  <>
    <Drawer placement="right">
      <Drawer.Trigger>
        <Button>Right</Button>
      </Drawer.Trigger>
      <Drawer.Portal></Drawer.Portal>
    </Drawer>
    <Drawer placement="left">
      <Drawer.Trigger>
        <Button>Left</Button>
      </Drawer.Trigger>
      <Drawer.Portal></Drawer.Portal>
    </Drawer>
    <Drawer placement="top">
      <Drawer.Trigger>
        <Button>Top</Button>
      </Drawer.Trigger>
      <Drawer.Portal></Drawer.Portal>
    </Drawer>
    <Drawer placement="bottom">
      <Drawer.Trigger>
        <Button>Bottom</Button>
      </Drawer.Trigger>
      <Drawer.Portal></Drawer.Portal>
    </Drawer>
  </>
);

export const full = () => (
  <>
    <Drawer placement="right" full>
      <Drawer.Trigger>
        <Button>Right Full</Button>
      </Drawer.Trigger>
      <Drawer.Portal></Drawer.Portal>
    </Drawer>
    <Drawer placement="left" full>
      <Drawer.Trigger>
        <Button>Left Full</Button>
      </Drawer.Trigger>
      <Drawer.Portal></Drawer.Portal>
    </Drawer>
    <Drawer placement="top" full>
      <Drawer.Trigger>
        <Button>Top Full</Button>
      </Drawer.Trigger>
      <Drawer.Portal></Drawer.Portal>
    </Drawer>
    <Drawer placement="bottom" full>
      <Drawer.Trigger>
        <Button>Bottom Full</Button>
      </Drawer.Trigger>
      <Drawer.Portal></Drawer.Portal>
    </Drawer>
  </>
);

export const controlSize = () => (
  <Drawer>
    <Drawer.Trigger>
      <Button>800x200</Button>
    </Drawer.Trigger>
    <Drawer.Portal width={800} height={200}></Drawer.Portal>
  </Drawer>
);

export const onOpen = () => (
  <Drawer onOpen={() => alert('open')} onClose={() => alert('close')}>
    <Drawer.Trigger>
      <Button>onOpen</Button>
    </Drawer.Trigger>
    <Drawer.Portal></Drawer.Portal>
  </Drawer>
);

export const hasCloseIcon = () => (
  <>
    <Drawer hasCloseIcon={true}>
      <Drawer.Trigger>
        <Button>CloseIcon</Button>
      </Drawer.Trigger>
      <Drawer.Portal></Drawer.Portal>
    </Drawer>
    <Drawer hasCloseIcon={false}>
      <Drawer.Trigger>
        <Button>NoIcon</Button>
      </Drawer.Trigger>
      <Drawer.Portal></Drawer.Portal>
    </Drawer>
  </>
);

export const disableOverlayClose = () => (
  <Drawer disableOverlayClose>
    <Drawer.Trigger>
      <Button>CloseIcon</Button>
    </Drawer.Trigger>
    <Drawer.Portal></Drawer.Portal>
  </Drawer>
);
