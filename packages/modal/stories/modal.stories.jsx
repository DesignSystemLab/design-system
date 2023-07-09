import { Modal } from '../src';
import React, { useState } from 'react';
import { Button } from '@jdesignlab/button';
import { TextInput } from '@jdesignlab/input';
import { Flex } from '@jdesignlab/flex';

export default {
  title: 'Actions/Modal',
  component: Modal,
  decorators: [Story => <Story />]
};

const argTypes = {};

const Template = args => <Modal {...args} />;

export const Basic = () => (
  <Modal>
    <Modal.Trigger>
      <Button>열기</Button>
    </Modal.Trigger>
    <Modal.Header>
      <h3>여기 헤더입니다.</h3>
    </Modal.Header>
    <Modal.Body>
      <Flex direction="column" gap={10}>
        <Flex.Item>
          <TextInput size="md" placeholder="hiihihi">
            <TextInput.Label>label</TextInput.Label>
          </TextInput>
        </Flex.Item>
        <Flex.Item>
          <TextInput size="md" placeholder="hiihihi">
            <TextInput.Label>label</TextInput.Label>
          </TextInput>
        </Flex.Item>
      </Flex>
    </Modal.Body>
    <Modal.Footer>
      <Button>여긴 푸터</Button>
    </Modal.Footer>
  </Modal>
);

export const withSetState = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Modal
      open={modalOpen}
      onOpen={() => {
        setModalOpen(true);
      }}
      onClose={() => {
        setModalOpen(false);
      }}
    >
      <Modal.Trigger>
        <Button>열기</Button>
      </Modal.Trigger>
      <Modal.Header>
        <h3>여기 헤더라구욧헤더라구욧헤더라구욧헤더라구욧</h3>
      </Modal.Header>
      <Modal.Body>
        <Flex direction="column" gap={10}>
          <Flex.Item>
            <TextInput size="md" placeholder="hiihihi">
              <TextInput.Label>label</TextInput.Label>
            </TextInput>
          </Flex.Item>
          <Flex.Item>
            <TextInput size="md" placeholder="hiihihi">
              <TextInput.Label>label</TextInput.Label>
            </TextInput>
          </Flex.Item>
        </Flex>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            setModalOpen(false);
          }}
        >
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export const onOpen = () => (
  <Modal
    onOpen={() => {
      alert('onOpen!');
    }}
    onClose={() => {
      alert('onClose!');
    }}
  >
    <Modal.Trigger>
      <Button>열기</Button>
    </Modal.Trigger>
    <Modal.Header>
      <h3>여기 헤더라구욧헤더라구욧헤더라구욧헤더라구욧</h3>
    </Modal.Header>
    <Modal.Body>
      <Flex direction="column" gap={10}>
        <Flex.Item>
          <TextInput size="md" placeholder="hiihihi">
            <TextInput.Label>label</TextInput.Label>
          </TextInput>
        </Flex.Item>
        <Flex.Item>
          <TextInput size="md" placeholder="hiihihi">
            <TextInput.Label>label</TextInput.Label>
          </TextInput>
        </Flex.Item>
      </Flex>
    </Modal.Body>
  </Modal>
);

export const hasCloseIcon = () => (
  <Modal hasCloseIcon>
    <Modal.Trigger>
      <Button>열기</Button>
    </Modal.Trigger>
    <Modal.Header>
      <h3>여기 헤더라구욧헤더라구욧헤더라구욧헤더라구욧</h3>
    </Modal.Header>
    <Modal.Body>
      <Flex direction="column" gap={10}>
        <Flex.Item>
          <TextInput size="md" placeholder="hiihihi">
            <TextInput.Label>label</TextInput.Label>
          </TextInput>
        </Flex.Item>
        <Flex.Item>
          <TextInput size="md" placeholder="hiihihi">
            <TextInput.Label>label</TextInput.Label>
          </TextInput>
        </Flex.Item>
      </Flex>
    </Modal.Body>
  </Modal>
);
