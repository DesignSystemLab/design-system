import React from 'react';
import { debug } from 'jest-preview';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Stack } from '../src';

const resizeWindow = () => {
  window.innerWidth = 374;
};

describe('Stack', () => {
  it('Stack 컴포넌트를 렌더링한다.', () => {
    render(
      <Stack>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </Stack>
    );
    const stack = screen.getByRole('list');
    const items = screen.getAllByRole('listitem');
    expect(stack).toBeInTheDocument();
    expect(items.length).toBe(3);
  });

  it('direction이 vertical이면 수직으로 렌더링된다.', () => {
    const user = userEvent.setup();
    render(
      <Stack direction="vertical">
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </Stack>
    );
    const stack = screen.getByRole('list');
    expect(stack).toHaveStyle({
      flexDirection: 'column'
    });
  });

  it('as 속성이 ul이면 ul 요소로 렌더링된다.', () => {
    render(
      <Stack as="ul">
        <li>first item</li>
        <li>second item</li>
        <li>third item</li>
      </Stack>
    );
    const stack = screen.getByRole('list');
    expect(stack.tagName.toLowerCase()).toBe('ul');
  });

  // it('responsive 속성을 갖으면 반응형 레이아웃을 지원한다.', () => {
  //   render(
  //     <Stack direction="horizontal" as="ul" responsive>
  //       <div style={{ height: '240px', width: '240px', backgroundColor: '#ff4d4d' }}>first</div>
  //       <div style={{ height: '240px', width: '240px', backgroundColor: '#3ae374' }}>second</div>
  //       <div style={{ height: '240px', width: '240px', backgroundColor: '#18dcff' }}>third</div>
  //     </Stack>
  //   );
  //   const stack = screen.getByRole('list');
  //   expect(stack).toHaveStyle({
  //     flexDirection: 'row'
  //   });
  //   window.addEventListener('resize', resizeWindow);
  //   expect(stack).toHaveStyle({
  //     flexDirection: 'column'
  //   });
  // });

  it('justify속성이 between이면 균일한 간격을 갖게 렌더링된다.', () => {
    render(
      <Stack justify="between">
        <li>first item</li>
        <li>second item</li>
        <li>third item</li>
      </Stack>
    );
    const stack = screen.getByRole('list');
    expect(stack).toHaveStyle({
      justifyContent: 'space-between'
    });
  });

  it('wrap 속성을 가지면 너비를 초과할 때 요소가 개행된다.', () => {
    render(
      <Stack direction="horizontal" wrap align="start">
        <a href="#">www.test-website-link1.com</a>
        <a href="#">www.test-website-link2.com</a>
        <a href="#">www.test-website-link3.com</a>
        <a href="#">www.test-website-link4.com</a>
        <a href="#">www.test-website-link5.com</a>
        <a href="#">www.test-website-link6.com</a>
      </Stack>
    );

    const stack = screen.getByRole('list');
    expect(stack).toHaveStyle({
      flexWrap: 'wrap'
    });
  });
});
