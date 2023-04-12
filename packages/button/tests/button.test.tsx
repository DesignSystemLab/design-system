import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Button } from '../src';
import { debug } from 'jest-preview';

expect.extend(toHaveNoViolations);
const onClick = jest.fn();
const COMPONENT_DISPLAY_NAME_REGEX = /^[A-Z][A-Za-z]+(\.[A-Z][A-Za-z]+)*$/;

describe('button element features', () => {
  it('has focus when it is clicked', () => {
    render(<Button>button</Button>);
    const button = screen.getByRole('button');
    userEvent.click(button);
    waitFor(() => {
      expect(button).toHaveFocus();
    });
  });

  it('fire onClick when it is clicked', () => {
    render(<Button onClick={onClick}>button</Button>);
    const button = screen.getByRole('button');
    userEvent.click(button);
    waitFor(() => {
      expect(onClick).toHaveBeenCalled();
    });
  });
});

describe('disabled', () => {
  it('sets disabled correctly', () => {
    render(<Button disabled>button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('disabled');
  });

  it('sync aria-disabled with disabled', () => {
    render(<Button disabled>Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('should not fire onClick on disabled button', () => {
    render(
      <Button disabled onClick={onClick}>
        button
      </Button>
    );
    const button = screen.getByRole('button');
    userEvent.click(button);
    waitFor(() => {
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  it('should not allow focusing disabled button', () => {
    render(
      <Button disabled onClick={onClick}>
        button
      </Button>
    );
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(button).not.toHaveFocus();
  });
});

describe('Button', () => {
  behavesAsComponent({ Component: Button, toRender: () => <Button></Button> });
  it('passes a11y test', async () => {
    const { container } = render(<Button>button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

function behavesAsComponent({ Component, toRender }: any) {
  it('sets a valid displayName', () => {
    expect(Component.displayName).toMatch(COMPONENT_DISPLAY_NAME_REGEX);
  });
}
