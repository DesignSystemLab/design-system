import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import { Drawer } from '../src';
import { DrawerProps } from '../src/types';
import { Button } from '@jdesignlab/button';

const COMPONENT_DISPLAY_NAME_REGEX = /^[A-Z][A-Za-z]+(\.[A-Z][A-Za-z]+)*$/;
const DRAWER_TRIGGER = 'drawer-trigger';
const DRAWER_PORTAL = 'drawer-portal';
const onToggleDrawer = jest.fn();

const renderDrawer = (props: DrawerProps) => {
  const { hasCloseIcon = true, open = false, ...rest } = props;
  return (
    <Drawer hasCloseIcon={hasCloseIcon} open={open} {...rest}>
      <Drawer.Trigger data-testid={DRAWER_TRIGGER}>
        <Button>트리거</Button>
      </Drawer.Trigger>
      <Drawer.Portal data-testid={DRAWER_PORTAL}>컨텐츠</Drawer.Portal>
    </Drawer>
  );
};

describe('open and close drawer correctly', () => {
  it('should not show drawer before Trigger is clicked', () => {
    renderDrawer({});
    const dialog = screen.queryByRole('dialog');
    expect(dialog).not.toBeInTheDocument();
  });
  it('shows drawer when Trigger is clicked', async () => {
    renderDrawer({});
    const dialog = screen.queryByRole('dialog');
    const trigger = screen.queryByRole('button');
    if (trigger) {
      userEvent.click(trigger);
    }
    waitFor(() => {
      expect(dialog).toBeVisible();
    });
  });
  it('fires onOpen when drawer opens', async () => {
    renderDrawer({
      onOpen: onToggleDrawer
    });
    const trigger = screen.queryByRole('button');
    if (trigger) {
      userEvent.click(trigger);
    }
    waitFor(() => {
      expect(onToggleDrawer).toHaveBeenCalled();
    });
  });
  it('closes drawer when overlay is clicked', async () => {
    renderDrawer({
      open: true
    });
    const dialog = screen.queryByRole('dialog');
    const overlay = screen.queryByRole('none');
    if (overlay) {
      userEvent.click(overlay);
    }
    waitFor(() => {
      expect(dialog).not.toBeInTheDocument();
    });
  });
  it('fires onClose when drawer closes', async () => {
    renderDrawer({
      onClose: onToggleDrawer
    });
    const trigger = screen.queryByRole('button');
    const overlay = screen.queryByRole('none');
    if (trigger && overlay) {
      userEvent.click(trigger);
      userEvent.click(overlay);
    }
    waitFor(() => {
      expect(onToggleDrawer).toHaveBeenCalled();
    });
  });
});

describe('Drawer', () => {
  behavesAsComponent({
    Component: Drawer,
    toRender: () => {
      <Drawer>Drawer</Drawer>;
    }
  });
});
describe('Drawer.Trigger', () => {
  behavesAsComponent({
    Component: Drawer.Trigger,
    toRender: () => {
      <Drawer.Trigger>Drawer.Trigger</Drawer.Trigger>;
    }
  });
});
describe('Drawer.Portal', () => {
  behavesAsComponent({
    Component: Drawer.Portal,
    toRender: () => {
      <Drawer.Portal>Drawer.Portal</Drawer.Portal>;
    }
  });
});

function behavesAsComponent({ Component, toRender }: any) {
  it('sets a valid displayName', () => {
    expect(Component.displayName).toMatch(COMPONENT_DISPLAY_NAME_REGEX);
  });
}
