import { Modal } from '../src';
import React, { useState } from 'react';
import { Button } from '@jdesignlab/button';
import { TextInput } from '@jdesignlab/input';
import { Flex } from '@jdesignlab/flex';

export default {
  title: 'Components/Modal',
  component: Modal,
  decorators: [Story => <Story />]
};

const argTypes = {};

const Template = args => <Modal {...args} />;

export const ModalBasic = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Modal
        hasCloseIcon
        open={modalOpen}
        onOpen={() => {
          setModalOpen(true);
          alert('onOpen!');
        }}
        onClose={() => {
          setModalOpen(false);
          alert('onClosse!');
        }}
      >
        <Modal.Trigger>
          <Button>Modal Trigger</Button>
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
            size="lg"
            variant="solid"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
