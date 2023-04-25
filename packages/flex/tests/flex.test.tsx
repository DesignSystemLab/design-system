import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Flex } from '../src';
import { debug } from 'jest-preview';

describe('flex features', () => {
  it('has display: flex style property', () => {
    render(
      <Flex>
        <Flex.Item>1</Flex.Item>
        <Flex.Item>2</Flex.Item>
      </Flex>
    );
    const flex = screen.getByRole('list');
    expect(flex).toHaveStyle({
      display: 'flex'
    });
  });

  it('will be rendered vertically if the direction is column ', () => {
    render(
      <Flex direction="column">
        <Flex.Item>1</Flex.Item>
        <Flex.Item>2</Flex.Item>
      </Flex>
    );
    const flex = screen.getByRole('list');
    expect(flex).toHaveStyle({
      display: 'flex',
      flexDirection: 'column'
    });
  });

  it('will be wrapped if it has wrap property', () => {
    render(
      <Flex wrap="wrap">
        <Flex.Item>1</Flex.Item>
        <Flex.Item>2</Flex.Item>
      </Flex>
    );
    const flex = screen.getByRole('list');
    expect(flex).toHaveStyle({
      display: 'flex',
      flexWrap: 'wrap'
    });
  });
});

describe('Flex.Item', () => {
  it('"flex" property of item deternmines flex-grow', () => {
    render(
      <Flex>
        <Flex.Item flex={1}>1</Flex.Item>
        <Flex.Item flex={2}>2</Flex.Item>
      </Flex>
    );
    const items = screen.getAllByRole('listitem');
    expect(items[0]).toHaveStyle({
      flexGrow: '1'
    });
    expect(items[1]).toHaveStyle({
      flexGrow: '2'
    });
  });

  it('"self" property of item deternmines align-self', () => {
    render(
      <Flex>
        <Flex.Item self="flex-start">1</Flex.Item>
        <Flex.Item self="flex-end">2</Flex.Item>
      </Flex>
    );
    const items = screen.getAllByRole('listitem');
    expect(items[0]).toHaveStyle({
      alignSelf: 'flex-start'
    });
    expect(items[1]).toHaveStyle({
      alignSelf: 'flex-end'
    });
  });

  it('"order" property of item deternmines order', () => {
    render(
      <Flex>
        <Flex.Item order={2}>1</Flex.Item>
        <Flex.Item order={1}>2</Flex.Item>
      </Flex>
    );
    const items = screen.getAllByRole('listitem');
    expect(items[0]).toHaveStyle({
      order: '2'
    });
    expect(items[1]).toHaveStyle({
      order: '1'
    });
  });
});
