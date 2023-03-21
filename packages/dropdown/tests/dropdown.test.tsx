import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
// import '@testing-library/jest-dom';
import { Dropdown } from '../src';

expect.extend(toHaveNoViolations);

const COMPONENT_DISPLAY_NAME_REGEX = /^[A-Z][A-Za-z]+(\.[A-Z][A-Za-z]+)*$/;
const DROPDOWN_WRAPPER = 'dropdown-component-wrapper';
const DROPDOWN_TRIGGER = 'dropdown-trigger';
const DROPDOWN_MENU = 'dropdown-menu';
const DROPDOWN_ITEM_HAS_SUB = 'dropdown-item-has-sub-menus';
const DROPDOWN_SUB = 'dropdown-sub-menu';
const DROPDOWN_SUB_ITEM = 'dropdown-sub-menu-item';
const DISABLED_ITEM = 'disabled-menu-item';

const onClick = jest.fn();

describe('toggle dropdown', () => {
  it('should not show items before Trigger is clicked', () => {
    renderDropdown();
    const dropdown = screen.getByTestId(DROPDOWN_MENU);
    expect(dropdown).not.toBeVisible();
  });

  it('shows items when Trigger is clicked', () => {
    renderDropdown();
    const trigger = screen.getByTestId(DROPDOWN_TRIGGER);
    const dropdown = screen.getByTestId(DROPDOWN_MENU);
    fireEvent.click(trigger);
    expect(dropdown).toBeVisible();
  });

  it('close items when background is clicked', () => {
    renderDropdown();
    const trigger = screen.getByTestId(DROPDOWN_TRIGGER);
    const dropdown = screen.getByTestId(DROPDOWN_MENU);
    fireEvent.click(trigger);
    expect(dropdown).toBeVisible();

    // TODO : document대신 screen 객체 이용하기
    const overlay = document.querySelector('.menu_overlay')!;
    fireEvent.click(overlay);
    expect(dropdown).not.toBeVisible();
  });

  it('onClick changes className, which makes it visible', () => {
    renderDropdown();
    const trigger = screen.getByTestId(DROPDOWN_TRIGGER);
    const dropdown = screen.getByTestId(DROPDOWN_MENU);
    fireEvent.click(trigger);
    expect(dropdown).toHaveClass('menu_open');

    fireEvent.click(trigger);
    expect(dropdown).toHaveClass('menu_close');
  });
});

describe('disabled', () => {
  it('sets disabled on correct items', () => {
    renderDropdown();
    const disabledItem = screen.getByTestId(DISABLED_ITEM);
    // TODO : <li>에 disabled 속성,,,
    // expect(disabledItem).toBeDisabled();
  });

  it('should not fire onClick on disabled item', () => {
    renderDropdown();
    const disabledItem = screen.getByTestId(DISABLED_ITEM);
    fireEvent.click(disabledItem);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should not allow focusing disabled items', async () => {
    renderDropdown();
    const disabledItem = screen.getByTestId(DISABLED_ITEM);
    fireEvent.click(disabledItem);
    expect(disabledItem).not.toHaveFocus();
  });

  it('sync aria-disabled with disabled', async () => {
    renderDropdown();
    const disabledItem = screen.getByTestId(DISABLED_ITEM);
    expect(disabledItem).toHaveAttribute('aria-disabled', 'true');
  });
});

describe('lazy', () => {
  it('has already rendered items if it is not lazy', () => {
    renderDropdown(false);
    const dropdown = screen.getByTestId(DROPDOWN_MENU);
    expect(dropdown).toBeInTheDocument();
  });

  it('should not render items if it is lazy', () => {
    renderDropdown(true); // to be clear
    const dropdown = screen.queryByTestId(DROPDOWN_MENU);
    expect(dropdown).not.toBeInTheDocument();
  });
});

describe('sub menu', () => {});

describe('Dropdown', () => {
  const component = <Dropdown></Dropdown>;
  behavesAsComponent({ Component: Dropdown, toRender: () => component });

  it('passes a11y test', async () => {
    const { container } = renderDropdown();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Dropdown.Trigger', () => {
  behavesAsComponent({ Component: Dropdown.Trigger, toRender: () => <Dropdown.Trigger></Dropdown.Trigger> });
  it('renders consistently', () => {
    expect(render(<Dropdown.Trigger></Dropdown.Trigger>)).toMatchSnapshot();
  });
});

describe('Dropdown.Divider', () => {
  behavesAsComponent({ Component: Dropdown.Divider, toRender: () => <Dropdown.Divider></Dropdown.Divider> });
});

describe('Dropdown.Menu', () => {
  const component = <Dropdown.Menu></Dropdown.Menu>;
  behavesAsComponent({ Component: Dropdown.Menu, toRender: () => component });
  hasCorrectClassName({
    testId: DROPDOWN_MENU,
    className: 'menu'
  });
});

describe('Dropdown.MenuItem', () => {
  behavesAsComponent({ Component: Dropdown.MenuItem, toRender: () => <Dropdown.MenuItem></Dropdown.MenuItem> });
  hasCorrectClassName({
    testId: DROPDOWN_ITEM_HAS_SUB,
    className: 'menu_item'
  });
});

describe('Dropdown.SubMenu', () => {
  behavesAsComponent({ Component: Dropdown.SubMenu, toRender: () => <Dropdown.SubMenu></Dropdown.SubMenu> });
});

describe('Dropdown.SubMenuItem', () => {
  behavesAsComponent({
    Component: Dropdown.SubMenuItem,
    toRender: () => <Dropdown.SubMenuItem></Dropdown.SubMenuItem>
  });
  hasCorrectClassName({
    testId: DROPDOWN_SUB_ITEM,
    className: 'sub_item'
  });
});

function renderDropdown(lazy?: any) {
  return render(
    <Dropdown data-testid={DROPDOWN_WRAPPER} gap={4} placement="bottom" lazy={lazy}>
      <Dropdown.Trigger data-testid={DROPDOWN_TRIGGER}>
        <button>click</button>
      </Dropdown.Trigger>
      <Dropdown.Menu data-testid={DROPDOWN_MENU}>
        <Dropdown.MenuItem data-testid={DISABLED_ITEM} disabled onClick={onClick}>
          1
        </Dropdown.MenuItem>
        <Dropdown.MenuItem data-testid={DROPDOWN_ITEM_HAS_SUB}>
          서브메뉴
          <Dropdown.SubMenu data-testid={DROPDOWN_SUB}>
            <Dropdown.SubMenuItem data-testid={DROPDOWN_SUB_ITEM}>첫번째sub1</Dropdown.SubMenuItem>
          </Dropdown.SubMenu>
        </Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function behavesAsComponent({ Component, toRender }: any) {
  it('sets a valid displayName', () => {
    expect(Component.displayName).toMatch(COMPONENT_DISPLAY_NAME_REGEX);
  });
}

function hasCorrectClassName({ testId, className }: any) {
  it('has correct className to handle keyDown event', () => {
    renderDropdown();
    const el = screen.queryByTestId(testId);
    expect(el).toHaveClass(className);
  });
}
