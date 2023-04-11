import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { Card } from '../src';
import { CardProps } from '../src/types';

describe('Card', () => {
  it('Card컴포넌트 렌더링.', () => {
    render(
      <Card>
        <Card.Header>
          <h1>Title</h1>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <p>Card Content.</p>
        </Card.Body>
        <Card.Footer>
          <p>Footer</p>
        </Card.Footer>
      </Card>
    );
  });
});
