import React, { useState } from 'react';
import { Button } from '@jdesignlab/button';
import { matchers } from '@emotion/jest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover } from '../src';
import { PopoverProps } from '../src/types';

expect.extend(matchers);

const BasicPopover = (props: PopoverProps) => {
  const { open, ...restProps } = props;
  const [isOpen, setIsOpen] = useState<boolean>(open ?? false);
  return (
    <Popover open={isOpen} {...restProps}>
      <Popover.Trigger>
        <Button>Trigger</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Header>Header</Popover.Header>
        <Popover.Body>Body</Popover.Body>
        <Popover.Footer>Footer</Popover.Footer>
      </Popover.Content>
    </Popover>
  );
};

describe('Popover', () => {
  it('open 속성이 true가 아니면 PopoverContent는 렌더링 되지 않는다.', () => {
    render(<BasicPopover />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('open 속성이 true일 때 PopoverContent는 렌더링을 수행한다.', () => {
    render(<BasicPopover open={true} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('Popover 컴포넌트는 기본적으로 화살표 모양을 갖고 있다. ', () => {
    render(<BasicPopover open={true} arrow={true} />);
    expect(screen.getByRole('dialog')).toHaveStyleRule('transform', 'translate(-50%, -50%) rotate(45deg)', {
      target: '::after'
    });
  });

  it('arrow 속성이 false이면 PopoverContent는 화살표 모양을 갖고 있지 않는다. ', () => {
    render(<BasicPopover open={true} arrow={false} />);
    expect(screen.getByRole('dialog')).not.toHaveStyleRule('transform', 'translate(-50%, -50%) rotate(45deg)', {
      target: '::after'
    });
  });

  it('Trrgier 내부의 버튼을 클릭시 PopoverContent를 열고 닫을 수 있다.', async () => {
    render(<BasicPopover />);
    const triggerButton = screen.getByRole('button');
    expect(triggerButton).toBeInTheDocument();
    await userEvent.click(triggerButton);
    expect(screen.queryByRole('dialog')).toBeInTheDocument();
    await userEvent.click(triggerButton);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('opOpen 핸들러를 갖는 Popover는 렌더링 직후 opOpen 이벤트를 수행한다.', () => {
    const handleOpen = jest.fn();
    render(<BasicPopover open={true} onOpen={handleOpen} />);
    expect(screen.queryByRole('dialog')).toBeInTheDocument();
    expect(handleOpen).toHaveBeenCalledTimes(1);
  });

  it('onClose 핸들러를 갖는 Popover는 닫힐 때 onClose 이벤트를 수행한다.', async () => {
    const handleClose = jest.fn();
    render(<BasicPopover open={true} onClose={handleClose} />);
    const triggerButton = screen.getByRole('button');
    await userEvent.click(triggerButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('open 상태일 때, Escape 키를 누르면 Popover 컴포넌트가 닫힌다.', async () => {
    const handleClose = jest.fn();
    render(<BasicPopover open={true} onClose={handleClose} />);
    expect(screen.queryByRole('dialog')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    expect(handleClose).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('open 상태일 때, Popover 외부 영역을 클릭하면 Popover 컴포넌트가 닫힌다.', async () => {
    const handleClose = jest.fn();
    render(<BasicPopover open={true} onClose={handleClose} />);
    expect(screen.queryByRole('dialog')).toBeInTheDocument();
    const popoverOverlay = screen.getByRole('presentation');
    await userEvent.click(popoverOverlay);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('placement 속성이 top이면 PopoverContent는 상위 방향으로 렌더링된다.', async () => {
    render(<BasicPopover open={true} placement="top" />);
    expect(screen.getByRole('dialog')).not.toHaveStyleRule('top', '0');
  });

  it('placement 속성이 right이면 PopoverContent는 우측 방향으로 렌더링된다.', async () => {
    render(<BasicPopover open={true} placement="top" />);
    expect(screen.getByRole('dialog')).not.toHaveStyleRule('right', '0');
  });

  it('placement 속성이 bottom이면 PopoverContent는 하위 방향으로 렌더링된다.', async () => {
    render(<BasicPopover open={true} placement="top" />);
    expect(screen.getByRole('dialog')).not.toHaveStyleRule('bottom', '0');
  });

  it('placement 속성이 left이면 PopoverContent는 좌측 방향으로 렌더링된다.', async () => {
    render(<BasicPopover open={true} placement="top" />);
    expect(screen.getByRole('dialog')).not.toHaveStyleRule('left', '0');
  });
});
