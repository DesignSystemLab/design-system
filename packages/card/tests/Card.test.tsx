import React from 'react';
import { debug } from 'jest-preview';
import { render, screen } from '@testing-library/react';
import { Card } from '../src';
import type { CardProps } from '../src/types';

const BasicCard = (props: CardProps) => {
  return (
    <Card {...props}>
      <Card.Header>
        <h1>Title</h1>
      </Card.Header>
      <Card.Body>
        <p>Content</p>
      </Card.Body>
      <Card.Footer>
        <p>Footer</p>
      </Card.Footer>
    </Card>
  );
};

describe('Card', () => {
  it('Card 컴포넌트를 렌더링한다.', () => {
    render(<BasicCard />);

    const card = screen.getByRole('article');
    expect(card).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('Card 컴포넌트는 기본적으로 수직으로 렌더링한다.', () => {
    render(<BasicCard />);

    const card = screen.getByRole('article');
    expect(card).toHaveStyle({
      display: 'flex',
      'flex-direction': 'column'
    });
  });

  it('direction 속성이 horizontal을 갖는 Card 컴포넌트는 수평으로 렌더링된다.', () => {
    render(<BasicCard direction="horizontal" />);

    const card = screen.getByRole('article');
    expect(card).toHaveStyle({
      display: 'flex',
      'flex-direction': 'row'
    });
  });

  it('Card 컴포넌트는 기본적으로 그림자 효과를 가지고 있다.', () => {
    render(<BasicCard />);
    const card = screen.getByRole('article');
    expect(card).not.toHaveStyle({
      'box-shadow': 'none'
    });
  });

  it('variant 속성이 filled를 갖는 Card 컴포넌트는 색상으로 채워진다.', () => {
    render(<BasicCard variant="filled" color="primary-400" />);
    const card = screen.getByRole('article');
    expect(card).toHaveStyle({
      'box-shadow': 'none',
      'background-color': '#FFEFBD'
    });
    debug();
  });

  it('variant 속성이 outlined를 갖는 Card 컴포넌트는 외곽선을 갖는다.', () => {
    render(<BasicCard variant="outlined" />);
    const card = screen.getByRole('article');
    expect(card).toHaveStyle({
      'border-radius': '8px'
    });
  });

  it('size 속성이 sm을 갖는 Card 컴포넌트는 최대 너비가 480px으로 제한된다.', () => {
    render(<BasicCard size="sm" />);
    const card = screen.getByRole('article');
    expect(card).toHaveStyle({
      'max-width': '480px'
    });
  });

  it('size 속성이 lg을 갖는 Card 컴포넌트는 최대 너비가 1024px으로 제한된다.', () => {
    render(<BasicCard size="lg" />);
    const card = screen.getByRole('article');
    expect(card).toHaveStyle({
      'max-width': '1024px'
    });
  });

  it('Divider가 포함된 Card 컴포넌트는 구분선이 추가된다.', () => {
    render(
      <Card>
        <Card.Header>
          <h1>Title</h1>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <p>Content</p>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <p>Footer</p>
        </Card.Footer>
      </Card>
    );

    const dividers = screen.getAllByRole('presentation');
    expect(dividers).toBeDefined();
    expect(dividers).toHaveLength(2);
  });
});
