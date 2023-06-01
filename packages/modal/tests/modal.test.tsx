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
const MODAL_TRIGGER_OPEN = 'modal-trigger-open';
const MODAL_TRIGGER_CLOSE = 'modal-trigger-close';
const onToggleModal = jest.fn();

function renderModal(props: ModalProps) {
  const { hasCloseIcon = false, open = false, lazy, ...restProps } = props;

  return render(
    <>
      <Modal hasCloseIcon={hasCloseIcon} lazy={lazy} open={open} {...restProps}>
        <Modal.Trigger data-testid={MODAL_TRIGGER_OPEN}>
          <Button>트리거</Button>
        </Modal.Trigger>
        <Modal.Header>헤더</Modal.Header>
        <Modal.Body>바디</Modal.Body>
        <Modal.Footer>푸터</Modal.Footer>
      </Modal>
    </>
  );
}

describe('open and close modal correctly', () => {
  it('should not show modal before Trigger is clicked', () => {
    renderModal({});
    const modalContent = document.querySelector('.modal_content');
    expect(modalContent).not.toBeVisible();
  });

  it('shows modal when Trigger is clicked', async () => {
    renderModal({});
    const trigger = screen.getByRole('button');
    await userEvent.click(trigger);
    const modalContent = screen.getByRole('dialog');
    expect(modalContent).toBeInTheDocument();
  });

  it('fires onOpen when modal is opend', async () => {
    renderModal({
      onOpen: onToggleModal
    });
    const openTrigger = screen.getByRole('button');
    await userEvent.click(openTrigger);
    expect(onToggleModal).toHaveBeenCalled();
  });

  it('fires onClose when modal get closed', async () => {
    renderModal({
      onClose: onToggleModal
    });
    const Trigger = screen.getByRole('button');
    await userEvent.click(Trigger);
    const modalContent = screen.getByRole('dialog');
    expect(modalContent).toBeInTheDocument();
    await userEvent.click(Trigger);
    expect(onToggleModal).toHaveBeenCalled();
  });

  it('closes modal when <Trigger close> is clicked', async () => {
    renderModal({});
    const Trigger = screen.getByRole('button');
    await userEvent.click(Trigger);
    const modalContent = screen.getByRole('dialog');
    expect(modalContent).toBeInTheDocument();
    await userEvent.click(Trigger);
    expect(modalContent).not.toBeInTheDocument();
  });

  it('closes modal when background is clikced', async () => {
    renderModal({
      open: true
    });
    const modalContent = screen.getByRole('dialog');
    const overlay = screen.getByRole('presentation');
    await userEvent.click(overlay);
    expect(modalContent).not.toBeInTheDocument();
  });
});

describe('lazy', () => {
  it('should not render items if it is lazy', () => {
    renderModal({ lazy: true });
    const modalContent = document.querySelector('.modal_content');
    if (!modalContent) {
      expect(true).toBe(true);
    }
  });

  it('has already rendered modal content if it is NOT lazy', () => {
    renderModal({ lazy: false });
    const modalContent = document.querySelector('.modal_content');
    if (modalContent) {
      expect(modalContent).not.toBeVisible();
    } else {
      expect(true).toBe(false);
    }
  });
});

describe('close icon', () => {
  it("has <Close> icon if it has 'hasCloseIcon' property", () => {
    renderModal({ hasCloseIcon: true });
    const closeIcon = document.querySelector('.header_icon');
    const trigger = document.querySelector('modal_trigger');
    userEvent.click(trigger!);
    waitFor(() => {
      expect(closeIcon).toBeVisible();
    });
  });

  it("doesn't have <Close> icon if it doesn't have 'hasCloseIcon' property", () => {
    renderModal({});
    const closeIcon = document.querySelector('.header_icon');
    if (closeIcon) {
      expect(true).toBe(false);
    } else {
      expect(true).toBe(true);
    }
  });
});

describe('Modal', () => {
  behavesAsComponent({
    Component: Modal,
    toRender: () => {
      <Modal></Modal>;
    }
  });
});
describe('Modal.Trigger', () => {
  behavesAsComponent({
    Component: Modal.Trigger,
    toRender: () => {
      <Modal.Trigger></Modal.Trigger>;
    }
  });
});
describe('Modal.Header', () => {
  behavesAsComponent({
    Component: Modal.Header,
    toRender: () => {
      <Modal.Header></Modal.Header>;
    }
  });
});
describe('Modal.Body', () => {
  behavesAsComponent({
    Component: Modal.Body,
    toRender: () => {
      <Modal.Body></Modal.Body>;
    }
  });
});
describe('Modal.Footer', () => {
  behavesAsComponent({
    Component: Modal.Footer,
    toRender: () => {
      <Modal.Footer></Modal.Footer>;
    }
  });
});

function behavesAsComponent({ Component, toRender }: any) {
  it('sets a valid displayName', () => {
    expect(Component.displayName).toMatch(COMPONENT_DISPLAY_NAME_REGEX);
  });
}
