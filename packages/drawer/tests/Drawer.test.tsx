import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { debug } from 'jest-preview';
import { render, screen, waitFor } from '@testing-library/react';
import { Drawer } from '../src';
import type { DrawerProps } from '../src/types';

const BasicDrawer = (props: DrawerProps) => {
  const [open, setOpen] = useState<boolean>(props.open || false);
  return (
    <Drawer placement={props.placement} open={open} onClose={props.onClose} onOpen={props.onOpen}>
      <Drawer.Content>
        <Drawer.Header>SampleHeader</Drawer.Header>
        <Drawer.Body>
          <p>content..</p>
          <p>content..</p>
        </Drawer.Body>
        <Drawer.Footer>Footer Area</Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  );
};

describe('Drawer', () => {
  it('open이 true가 아니면, 렌더링이 수행되지 않는다.', () => {
    render(<BasicDrawer />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('open이 true일 때, 렌더링을 수행한다. ', () => {
    render(<BasicDrawer open={true} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('placement가 right일 때, right 방향으로 렌더링을 수행한다.', () => {
    render(<BasicDrawer open={true} placement={'right'} />);
    expect(screen.getByRole('dialog')).toHaveStyle({
      right: 0
    });
  });

  it('닫기 아이콘을 클릭하면 Drawer가 닫힌다.', async () => {
    const user = userEvent.setup();
    render(<BasicDrawer open={true} placement={'right'} />);
    const drawer = screen.getByRole('dialog');
    const closeIcon = screen.getByRole('button');
    expect(drawer).toBeInTheDocument();
    await user.click(closeIcon);
    expect(drawer).not.toBeVisible();
  });

  it('onOpen 핸들러를 갖는 Drawer는 렌더링 직후 onOpen 이벤트를 수행한다.', async () => {
    const handleOnOpen = jest.fn();
    render(<BasicDrawer open={true} onOpen={handleOnOpen} />);
    const drawer = screen.getByRole('dialog');
    expect(drawer).toBeInTheDocument();
    expect(handleOnOpen).toHaveBeenCalledTimes(1);
  });

  it('onClose 핸들러를 갖는 Drawer는 닫힐 때 onClose 이벤트를 수행한다.', async () => {
    const handleOnClose = jest.fn();
    const user = userEvent.setup();
    render(<BasicDrawer open={true} onClose={handleOnClose} />);
    const drawer = screen.getByRole('dialog');
    const closeIcon = screen.getByRole('button');
    expect(drawer).toBeInTheDocument();
    await user.click(closeIcon);
    expect(drawer).not.toBeVisible();
    expect(handleOnClose).toHaveBeenCalledTimes(1);
  });
});
