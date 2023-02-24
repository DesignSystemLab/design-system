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
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        버튼
      </Button>
      <Modal open={openModal} hasCloseIcon={true}>
        <Modal.Header>
          <h3>여기 헤더라구욧헤더라구욧헤더라구욧헤더라구욧</h3>
        </Modal.Header>
        <Modal.Body>
          <Flex direction="column" gap={10}>
            <TextInput inputSize="md" variant="outline" placeholder="hiihihi">
              <TextInput.Label>label</TextInput.Label>
              <TextInput.Right>Right</TextInput.Right>
            </TextInput>
            <TextInput inputSize="md" variant="outline" placeholder="hiihihi">
              <TextInput.Label>label</TextInput.Label>
              <TextInput.Right>Right</TextInput.Right>
            </TextInput>
          </Flex>
        </Modal.Body>
        <Modal.Footer>
          <Flex justify="space-between">
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              닫기
            </Button>
            <Button
              size="lg"
              variant="solid"
              onClick={() => {
                alert('OK@!!@#');
                setOpenModal(false);
              }}
            >
              확인
            </Button>
          </Flex>
        </Modal.Footer>
      </Modal>
    </>
  );
};
