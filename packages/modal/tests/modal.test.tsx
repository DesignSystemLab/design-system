import React, { useState } from 'react';
import { Button } from '@jdesignlab/button';
import { render, screen, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Modal } from '../src';
import { debug } from 'jest-preview';
import type { ModalProps } from '../src/types';

expect.extend(toHaveNoViolations);

const COMPONENT_DISPLAY_NAME_REGEX = /^[A-Z][A-Za-z]+(\.[A-Z][A-Za-z]+)*$/;
const MODAL_TRIGGER = 'modal-trigger';
const MODAL_PORTAL = 'modal-portal';
const onToggleModal = jest.fn();

function renderModal(props: ModalProps) {
  const { hasCloseIcon = true, open = false, ...rest } = props;

  return render(
    <>
      <Modal hasCloseIcon={hasCloseIcon} open={open} {...rest}>
        <Modal.Trigger data-testid={MODAL_TRIGGER}>
          <Button>트리거</Button>
        </Modal.Trigger>
        <Modal.Portal data-testid={MODAL_PORTAL}>모달 컨텐츠</Modal.Portal>
      </Modal>
    </>
  );
}

describe('open and close modal correctly', () => {
  it('should not show modal before Trigger is clicked', () => {
    renderModal({});
    const dialog = screen.queryByRole('dialog');
    expect(dialog).not.toBeInTheDocument();
  });
  it('shows modal when Trigger is clicked', async () => {
    renderModal({});
    const dialog = screen.queryByRole('dialog');
    const trigger = screen.getByRole('button');
    userEvent.click(trigger);
    waitFor(() => {
      expect(dialog).toBeVisible();
    });
  });
  it('fires onOpen when modal opens', async () => {
    renderModal({
      onOpen: onToggleModal
    });
    const trigger = screen.getByRole('button');
    userEvent.click(trigger);
    waitFor(() => {
      expect(onToggleModal).toHaveBeenCalled();
    });
  });
  it('closes modal when overlay is clicked', async () => {
    renderModal({
      open: true
    });
    const dialog = screen.queryByRole('dialog');
    const overlay = screen.queryByRole('none')!;
    userEvent.click(overlay);
    waitFor(() => {
      expect(dialog).not.toBeInTheDocument();
    });
  });
  it('fires onClose when modal closes', async () => {
    renderModal({
      onClose: onToggleModal
    });
    const trigger = screen.getByRole('button');
    const overlay = screen.queryByRole('none')!;
    userEvent.click(trigger);
    userEvent.click(overlay);
    waitFor(() => {
      expect(onToggleModal).toHaveBeenCalled();
    });
  });
});

describe('Modal', () => {
  behavesAsComponent({
    Component: Modal,
    toRender: () => {
      <Modal>Modal</Modal>;
    }
  });
});
describe('Modal.Trigger', () => {
  behavesAsComponent({
    Component: Modal.Trigger,
    toRender: () => {
      <Modal.Trigger>Modal.Trigger</Modal.Trigger>;
    }
  });
});
describe('Modal.Portal', () => {
  behavesAsComponent({
    Component: Modal.Portal,
    toRender: () => {
      <Modal.Portal>Modal.Portal</Modal.Portal>;
    }
  });
});

function behavesAsComponent({ Component, toRender }: any) {
  it('sets a valid displayName', () => {
    expect(Component.displayName).toMatch(COMPONENT_DISPLAY_NAME_REGEX);
  });
}
