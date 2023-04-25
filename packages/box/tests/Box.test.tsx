import React from 'react';
import { getColorByToken, setTextColorByBackground } from '@jdesignlab/theme';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Box } from '../src';

describe('Box', () => {
  it('Box 컴포넌트를 렌더링한다.', () => {
    render(<Box>Box</Box>);
    const box = screen.getByRole('presentation');
    expect(box).toBeInTheDocument();
  });

  it('Box 컴포넌트는 기본적으로 div 요소로 렌더링된다.', () => {
    const { container } = render(<Box>Box</Box>);
    const box = screen.getByRole('presentation');
    const div = container.querySelector('div');
    expect(box).toBeInTheDocument();
    expect(div).toBeInTheDocument();
  });

  it('color 속성을 갖는 Box 컴포넌트는 Backgorund 색상을 갖는다.', () => {
    const boxColor = 'primary-500';
    const bgColor = getColorByToken(boxColor);
    const textColor = setTextColorByBackground(bgColor);
    render(<Box color={boxColor}>Box</Box>);
    const box = screen.getByRole('presentation');
    expect(box).toBeInTheDocument();
    expect(box).toHaveStyle({
      backgroundColor: bgColor,
      color: textColor
    });
  });

  it('Box 컴포넌트는 style 속성을 통해 스타일 적용이 가능하다. ', () => {
    const boxWidth = '64px';
    const boxHeight = '128px';
    render(<Box style={{ width: boxWidth, height: boxHeight }}>Box</Box>);
    const box = screen.getByRole('presentation');
    expect(box).toHaveStyle({
      width: boxWidth,
      height: boxHeight
    });
  });

  it('Box 컴포넌트는 EventHandler를 가질 수 있다.', async () => {
    const handleClick = jest.fn();
    render(<Box onClick={handleClick}>Click Me</Box>);
    const box = screen.getByRole('presentation');
    await userEvent.click(box);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('as 속성을 갖는 Box 컴포넌트는 다른 요소로 렌더링될 수 있다.', () => {
    const { container } = render(
      <Box as="ul" role="list">
        <Box as="li" role="listitem">
          list 1
        </Box>
        <Box as="li" role="listitem">
          list 2
        </Box>
        <Box as="li" role="listitem">
          list 3
        </Box>
      </Box>
    );
    const ulBox = screen.getByRole('list');
    const ulList = screen.getAllByRole('listitem');
    const ulElement = container.querySelector('ul');
    const listElements = container.querySelectorAll('li');
    expect(ulBox).toBeInTheDocument();
    expect(ulElement).toBeInTheDocument();
    expect(listElements).toHaveLength(3);
  });
});
