import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Flex } from '../src';
import { debug } from 'jest-preview';

describe('flex features', () => {
  it('has display: flex style property', () => {
    render(
      <Flex data-testid="flex">
        <Flex.Item data-testid="item">1</Flex.Item>
        <Flex.Item data-testid="item">2</Flex.Item>
      </Flex>
    );
    const flex = screen.getByTestId('flex');

    expect(flex).toHaveStyle({
      display: 'flex'
    });
  });

  it('will be rendered vertically if the direction is column ', () => {
    render(
      <Flex direction="column" data-testid="flex">
        <Flex.Item data-testid="item">1</Flex.Item>
        <Flex.Item data-testid="item">2</Flex.Item>
      </Flex>
    );
    const flex = screen.getByTestId('flex');
    expect(flex).toHaveStyle({
      display: 'flex',
      flexDirection: 'column'
    });
  });

  it('will be wrapped if it has wrap property', () => {
    render(
      <Flex wrap="wrap" data-testid="flex">
        <Flex.Item data-testid="item">1</Flex.Item>
        <Flex.Item data-testid="item">2</Flex.Item>
      </Flex>
    );
    const flex = screen.getByTestId('flex');
    expect(flex).toHaveStyle({
      display: 'flex',
      flexWrap: 'wrap'
    });
  });
});

describe('Flex.Item', () => {
  it('"flex" property of item deternmines flex-grow', () => {
    render(
      <Flex data-testid="flex">
        <Flex.Item flex={1} data-testid="item">
          1
        </Flex.Item>
        <Flex.Item flex={2} data-testid="item">
          2
        </Flex.Item>
      </Flex>
    );
    const items = screen.getAllByTestId('item');
    expect(items[0]).toHaveStyle({
      flexGrow: '1'
    });
    expect(items[1]).toHaveStyle({
      flexGrow: '2'
    });
  });

  it('"self" property of item deternmines align-self', () => {
    render(
      <Flex data-testid="flex">
        <Flex.Item self="flex-start" data-testid="item">
          1
        </Flex.Item>
        <Flex.Item self="flex-end" data-testid="item">
          2
        </Flex.Item>
      </Flex>
    );
    const items = screen.getAllByTestId('item');
    expect(items[0]).toHaveStyle({
      alignSelf: 'flex-start'
    });
    expect(items[1]).toHaveStyle({
      alignSelf: 'flex-end'
    });
  });

  it('"order" property of item deternmines order', () => {
    render(
      <Flex data-testid="flex">
        <Flex.Item order={2} data-testid="item">
          1
        </Flex.Item>
        <Flex.Item order={1} data-testid="item">
          2
        </Flex.Item>
      </Flex>
    );
    const items = screen.getAllByTestId('item');
    expect(items[0]).toHaveStyle({
      order: '2'
    });
    expect(items[1]).toHaveStyle({
      order: '1'
    });
  });
});
