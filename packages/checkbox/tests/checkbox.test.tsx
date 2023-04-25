import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Checkbox } from '../src';
import { debug } from 'jest-preview';

expect.extend(toHaveNoViolations);
const onClick = jest.fn();
const COMPONENT_DISPLAY_NAME_REGEX = /^[A-Z][A-Za-z]+(\.[A-Z][A-Za-z]+)*$/;

describe('checkbox element features', () => {
  it('changes checked value when it is clicked', async () => {
    render(<Checkbox>checkbox</Checkbox>);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    userEvent.click(checkbox);
    waitFor(() => {
      expect(checkbox).toBeChecked();
    });
  });

  it('has checked value if it has checked property', () => {
    render(<Checkbox checked={true}>checkbox</Checkbox>);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('fires onChange function and changes the value', () => {
    render(<Checkbox onClick={onClick}>checkbox</Checkbox>);
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);
    waitFor(() => {
      expect(onClick).toHaveBeenCalled;
      expect(checkbox).toBeChecked();
    });
  });

  it('should not change value if it has readOnly property', () => {
    render(<Checkbox readOnly={true}>checkbox</Checkbox>);
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);
    waitFor(() => {
      expect(checkbox).not.toBeChecked();
    });
  });

  it('should not change value if it has disabled property', () => {
    render(<Checkbox disabled={true}>checkbox</Checkbox>);
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);
    waitFor(() => {
      expect(checkbox).not.toBeChecked();
    });
  });

  it('has initially checked if defaultValue is matched', () => {
    render(
      <Checkbox.Group defaultValue={['1', '2']}>
        <Checkbox value="1">1</Checkbox>
        <Checkbox value="2">2</Checkbox>
        <Checkbox value="3">3</Checkbox>
      </Checkbox.Group>
    );
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes[0]).toBeChecked();
    expect(checkboxes[1]).toBeChecked();
    expect(checkboxes[2]).not.toBeChecked();
  });

  it('can navigate with arrow key in the same checkbox group', () => {
    render(
      <Checkbox.Group>
        <Checkbox>1</Checkbox>
        <Checkbox>2</Checkbox>
      </Checkbox.Group>
    );
    const checkboxes = screen.getAllByRole('checkbox');
    userEvent.click(checkboxes[0]);
    userEvent.keyboard('{arrowRight}');
    waitFor(() => {
      expect(checkboxes[1]).toHaveFocus();
    });
    userEvent.keyboard('{arrowLeft}');
    waitFor(() => {
      expect(checkboxes[0]).toHaveFocus();
    });
    userEvent.keyboard('{arrowDown}');
    waitFor(() => {
      expect(checkboxes[1]).toHaveFocus();
    });
    userEvent.keyboard('{arrowUp}');
    waitFor(() => {
      expect(checkboxes[0]).toHaveFocus();
    });
  });

  it('can check with enter key', () => {
    render(
      <Checkbox.Group>
        <Checkbox>1</Checkbox>
        <Checkbox>2</Checkbox>
      </Checkbox.Group>
    );
    const checkboxes = screen.getAllByRole('checkbox');
    userEvent.click(checkboxes[0]);
    userEvent.keyboard('{arrowRight}');
    waitFor(() => {
      expect(checkboxes[1]).toHaveFocus();
    });
    expect(checkboxes[1]).not.toBeChecked();
    userEvent.keyboard('{enter}');
    waitFor(() => {
      expect(checkboxes[1]).toBeChecked();
    });
  });
});

describe('Checkbox', () => {
  behavesAsComponent({
    Component: Checkbox,
    toRender: () => {
      <Checkbox>checkbox</Checkbox>;
    }
  });
  it('passes a11y test', async () => {
    const { container } = render(<Checkbox>button</Checkbox>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
describe('Checkbox.Group', () => {
  behavesAsComponent({
    Component: Checkbox.Group,
    toRender: () => {
      <Checkbox.Group>
        <Checkbox>checkbox</Checkbox>
      </Checkbox.Group>;
    }
  });
  it('passes a11y test', async () => {
    const { container } = render(
      <Checkbox.Group>
        <Checkbox>checkbox</Checkbox>
      </Checkbox.Group>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

function behavesAsComponent({ Component, toRender }: any) {
  it('sets a valid displayName', () => {
    expect(Component.displayName).toMatch(COMPONENT_DISPLAY_NAME_REGEX);
  });
}
