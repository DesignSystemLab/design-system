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
  return (
    <>
      <Modal hasCloseIcon>
        <Modal.Trigger
          open
          onOpen={() => {
            alert('onOpen!');
          }}
        >
          <Button>버튼</Button>
        </Modal.Trigger>
        <Modal.Header>
          <h3>여기 헤더라구욧헤더라구욧헤더라구욧헤더라구욧</h3>
        </Modal.Header>
        <Modal.Body>
          <Flex direction="column" gap={10}>
            <TextInput size="md" placeholder="hiihihi">
              <TextInput.Label>label</TextInput.Label>
            </TextInput>
            <TextInput size="md" placeholder="hiihihi">
              <TextInput.Label>label</TextInput.Label>
            </TextInput>
          </Flex>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Trigger
            close
            onClose={() => {
              alert('onClose!');
            }}
          >
            <Button size="lg" variant="solid">
              확인
            </Button>
          </Modal.Trigger>
        </Modal.Footer>
      </Modal>
    </>
  );
};
