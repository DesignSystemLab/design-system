import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { TextInput } from '../src';
import { debug } from 'jest-preview';
import { createClassVariant } from '@jdesignlab/theme';
import { CLEARABLE_ICON_CLASSNAME, VISIBLE_ICON_CLASSNAME } from '../src/constants';

expect.extend(toHaveNoViolations);

const COMPONENT_DISPLAY_NAME_REGEX = /^[A-Z][A-Za-z]+(\.[A-Z][A-Za-z]+)*$/;
const TEXTINPUT_LABEL = 'textinput-label';
const TEXTINPUT_MESSAGE = createClassVariant('input', 'message');
const TEST_STR = 'HelloWorld';

// input element features
describe('input element features', () => {
  it('changes value when typed into', () => {
    render(<TextInput type="text"></TextInput>);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: TEST_STR } });
    expect(input).toHaveValue(TEST_STR);

    // TODO fireEvent -> userEvent로 변경 : 아래코드 fail 이어야 하는데 왜 pass.....?
    // userEvent.type(input, TEST_STR);
    // waitFor(() => {
    //   expect(input).not.toHaveValue(TEST_STR);
    // });
  });

  it('shows defaultValue if it has', () => {
    render(<TextInput type="text" defaultValue={TEST_STR}></TextInput>);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue(TEST_STR);
  });

  it('placeholder', () => {
    render(<TextInput placeholder={TEST_STR}></TextInput>);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', TEST_STR);
  });

  it('max length', async () => {
    const testLength = 5;
    render(<TextInput maxLength={testLength}></TextInput>);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: TEST_STR } });
    expect(input).toHaveValue(TEST_STR);
    expect(input.value.length).toBe(TEST_STR.length);
  });
});

// type password
describe('input element with type password', () => {
  it('hides entered text', () => {
    render(<TextInput type="password"></TextInput>);
    const input = document.querySelector('input[type="password"]');
    if (input) {
      fireEvent.change(input, { target: { value: TEST_STR } });
      expect(input).toHaveValue(TEST_STR);
      expect(input).toHaveAttribute('type', 'password');
    } else {
      expect(true).toBe(false);
    }

    // TODO 여기도 userEvent.type 안 먹는듯...
    // if (input) {
    //   userEvent.type(input, TEST_STR);
    //   waitFor(() => {
    //     expect(input).toHaveValue(TEST_STR);
    //     expect(input).toHaveAttribute('type', 'password');
    //   });
    // } else {
    //   expect(true).toBe(false);
    // }
  });

  it('has <Eye> icon', () => {
    render(<TextInput type="password"></TextInput>);
    const visibleIcon = document.querySelector(`.${VISIBLE_ICON_CLASSNAME}`);
    expect(visibleIcon).toBeVisible();
  });

  it('shows entered text when <Eye> icon is clicked', () => {
    render(<TextInput type="password"></TextInput>);
    const input = document.querySelector('input[type="password"]');
    const visibleIcon = document.querySelector(`.${VISIBLE_ICON_CLASSNAME}`);
    if (visibleIcon) {
      userEvent.click(visibleIcon);
      waitFor(() => {
        expect(input).toHaveAttribute('type', 'text');
      });
    } else {
      expect(true).toBe(false);
    }
  });
});

describe('clearable property', () => {
  it('has <Close> icon when if it has clearable property', () => {
    render(<TextInput clearable></TextInput>);
    const closeIcon = document.querySelector(`.${CLEARABLE_ICON_CLASSNAME}`);
    expect(closeIcon).toBeVisible();
  });

  it('remove entered text when <Close> icon is clicked', () => {
    render(<TextInput clearable></TextInput>);
    const input = screen.getByRole('textbox');
    const closeIcon = document.querySelector(`.${CLEARABLE_ICON_CLASSNAME}`);
    if (closeIcon) {
      userEvent.click(closeIcon);
      waitFor(() => {
        expect(input).not.toHaveValue();
      });
    } else {
      expect(true).toBe(false);
    }
  });
});

describe('TextInput', () => {
  behavesAsComponent({
    Component: TextInput,
    toRender: () => {
      <TextInput></TextInput>;
    }
  });
});

// TextInput.Label
describe('TextInput.Label', () => {
  behavesAsComponent({
    Component: TextInput.Label,
    toRender: () => {
      <TextInput.Label></TextInput.Label>;
    }
  });

  it('shows label string correctly', () => {
    render(
      <TextInput>
        <TextInput.Label data-testid={TEXTINPUT_LABEL}>{TEST_STR}</TextInput.Label>
      </TextInput>
    );
    const label = screen.getByTestId(TEXTINPUT_LABEL);
    expect(label).toHaveTextContent(TEST_STR);
  });

  it('focuses on its own input element when Label is clicked', () => {
    render(
      <>
        <TextInput>
          <TextInput.Label>라벨1</TextInput.Label>
        </TextInput>
        <TextInput>
          <TextInput.Label data-testid={TEXTINPUT_LABEL}>라벨2</TextInput.Label>
        </TextInput>
        <TextInput>
          <TextInput.Label>라벨3</TextInput.Label>
        </TextInput>
      </>
    );
    const label = screen.getByTestId(TEXTINPUT_LABEL);
    const inputArr = screen.getAllByRole('textbox');
    userEvent.click(label);
    waitFor(() => {
      expect(inputArr[0]).not.toHaveFocus();
      expect(inputArr[1]).toHaveFocus();
      expect(inputArr[2]).not.toHaveFocus();
    });
  });
});

// TextInput.Message
describe('TextInput.Message', () => {
  behavesAsComponent({
    Component: TextInput.Message,
    toRender: () => {
      <TextInput.Message></TextInput.Message>;
    }
  });

  it('shows Message when it has focus', () => {
    render(
      <TextInput>
        <TextInput.Message data-testid={TEXTINPUT_MESSAGE}>{TEST_STR}</TextInput.Message>
      </TextInput>
    );
    const input = screen.getByRole('textbox');
    const message = screen.getByTestId(TEXTINPUT_MESSAGE);
    expect(message).not.toBeVisible();
    userEvent.click(input);
    waitFor(() => {
      expect(message).toBeVisible();
    });
  });

  it('keeps showing message if it has consistent property', () => {
    render(
      <TextInput>
        <TextInput.Message consistent data-testid={TEXTINPUT_MESSAGE}>
          {TEST_STR}
        </TextInput.Message>
      </TextInput>
    );
    const input = screen.getByRole('textbox');
    const message = screen.getByTestId(TEXTINPUT_MESSAGE);
    expect(message).toBeVisible();
    userEvent.click(input);
    waitFor(() => {
      expect(message).toBeVisible();
    });
  });
});

function behavesAsComponent({ Component, toRender }: any) {
  it('sets a valid displayName', () => {
    expect(Component.displayName).toMatch(COMPONENT_DISPLAY_NAME_REGEX);
  });
}
