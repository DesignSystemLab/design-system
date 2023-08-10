import { Modal } from '../src';
import React, { useState } from 'react';
import { Button } from '@jdesignlab/button';

export default {
  title: 'Actions/Modal',
  component: Modal,
  decorators: [Story => <Story />]
};

const argTypes = {};

const Template = args => <Modal {...args} />;

export const Basic = () => (
  <Modal hasCloseIcon>
    <Modal.Trigger>
      <Button>Basic</Button>
    </Modal.Trigger>
    <Modal.Portal></Modal.Portal>
  </Modal>
);

export const controlled = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}> state이용해서 외부에서 열기</Button>
      <Modal hasCloseIcon open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
        <Modal.Trigger>
          <Button>Trigger로</Button>
        </Modal.Trigger>
        <Modal.Portal>
          <Button onClick={() => setOpen(false)}>닫기</Button>
        </Modal.Portal>
      </Modal>
    </>
  );
};

export const controlSize = () => (
  <Modal>
    <Modal.Trigger>
      <Button>800x200</Button>
    </Modal.Trigger>
    <Modal.Portal width={800} height={200}></Modal.Portal>
  </Modal>
);

export const onOpen = () => (
  <Modal onOpen={() => alert('open')} onClose={() => alert('close')}>
    <Modal.Trigger>
      <Button>onOpen</Button>
    </Modal.Trigger>
    <Modal.Portal></Modal.Portal>
  </Modal>
);

export const hasCloseIcon = () => (
  <>
    <Modal hasCloseIcon={true}>
      <Modal.Trigger>
        <Button>CloseIcon</Button>
      </Modal.Trigger>
      <Modal.Portal></Modal.Portal>
    </Modal>
    <Modal hasCloseIcon={false}>
      <Modal.Trigger>
        <Button>NoIcon</Button>
      </Modal.Trigger>
      <Modal.Portal></Modal.Portal>
    </Modal>
  </>
);

export const disableOverlayClose = () => (
  <Modal disableOverlayClose>
    <Modal.Trigger>
      <Button>CloseIcon</Button>
    </Modal.Trigger>
    <Modal.Portal></Modal.Portal>
  </Modal>
);
