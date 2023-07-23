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

  it('color 속성을 갖는 Box 컴포넌트는 Color 속성을 갖는다.', () => {
    const boxColor = 'primary-500';
    const textColor = getColorByToken(boxColor);
    render(<Box color={boxColor}>Box</Box>);
    const box = screen.getByRole('presentation');
    expect(box).toBeInTheDocument();
    expect(box).toHaveStyle({
      color: textColor
    });
  });

  it('Box 컴포넌트에 color 속성이 주어졌을 때, 해당 컴포넌트의 텍스트 색상은 color 속성 값과 동일해야 한다.', () => {
    const boxColor = 'primary-500';
    const backgroundColor = getColorByToken(boxColor);
    render(<Box backgroundColor={boxColor}>Box</Box>);
    const box = screen.getByRole('presentation');
    expect(box).toBeInTheDocument();
    expect(box).toHaveStyle({
      backgroundColor
    });
  });

  it('Box 컴포넌트에 backgroundColor 속성이 주어졌을 때, 해당 컴포넌트의 배경 색상은 backgroundColor 속성 값과 동일해야 한다.', () => {
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
    const ulElement = container.querySelector('ul');
    const listElements = container.querySelectorAll('li');
    expect(ulBox).toBeInTheDocument();
    expect(ulElement).toBeInTheDocument();
    expect(listElements).toHaveLength(3);
  });
});
