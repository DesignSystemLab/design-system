import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Tabs } from '../src';
import { debug } from 'jest-preview';

expect.extend(toHaveNoViolations);

const COMPONENT_DISPLAY_NAME_REGEX = /^[A-Z][A-Za-z]+(\.[A-Z][A-Za-z]+)*$/;
const TAB_TRIGGER = 'tab-trigger';
const TAB_TRIGGER_DISABLED = 'tab-trigger-disabled';
const TAB_CONTENT = 'tab-content';
const TAB_CONTENT_DISABLED = 'tab-content-disabled';
const TAB_VALUE = 'tab-value';

interface Props {
  defaultValue?: string;
  lazy?: boolean;
}

const onChange = jest.fn();
function renderTabs({ defaultValue, lazy }: Props) {
  return render(
    <Tabs variant="enclosed" size="sm" onChange={onChange} lazy={!!lazy} defaultValue={defaultValue}>
      <Tabs.List>
        <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
        <Tabs.Trigger value="tab2" data-testid={TAB_TRIGGER_DISABLED} disabled>
          tab2
        </Tabs.Trigger>
        <Tabs.Trigger value={TAB_VALUE} data-testid={TAB_TRIGGER}>
          tab3
        </Tabs.Trigger>
        <Tabs.Trigger value="tab4">tab4</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="tab1">content1</Tabs.Content>
      <Tabs.Content value="tab2" data-testid={TAB_CONTENT_DISABLED}>
        content2
      </Tabs.Content>
      <Tabs.Content value={TAB_VALUE} data-testid={TAB_CONTENT}>
        content3
      </Tabs.Content>
      <Tabs.Content value="tab4">content4</Tabs.Content>
    </Tabs>
  );
}

describe('tab features', () => {
  it('changes tab content when Trigger is clicked', () => {
    renderTabs({});
    const trigger = screen.getByTestId(TAB_TRIGGER);
    const content = screen.getByTestId(TAB_CONTENT);
    expect(content).not.toBeVisible();
    userEvent.click(trigger);
    waitFor(() => {
      expect(content).toBeVisible();
    });
  });

  it('shows defaultValue content if it has defaultValue prop', () => {
    renderTabs({ defaultValue: TAB_VALUE });
    const content = screen.getByTestId(TAB_CONTENT);
    expect(content).toBeVisible();
  });

  it('fire onChange when tab is changed', () => {
    renderTabs({});
    const trigger = screen.getByTestId(TAB_TRIGGER);
    userEvent.click(trigger);
    waitFor(() => {
      expect(onChange).not.toHaveBeenCalled();
    });
  });
});

describe('disabled', () => {
  it('should not change tab content when disabled Trigger is clicked', () => {
    renderTabs({});
    const trigger = screen.getByTestId(TAB_TRIGGER_DISABLED);
    const content = screen.getByTestId(TAB_CONTENT_DISABLED);
    userEvent.click(trigger);
    waitFor(() => {
      expect(content).not.toBeVisible();
    });
  });

  it('should not fire onChange on disabled tab', () => {
    renderTabs({});
    const trigger = screen.getByTestId(TAB_TRIGGER_DISABLED);
    const content = screen.getByTestId(TAB_CONTENT_DISABLED);
    userEvent.click(trigger);
    waitFor(() => {
      expect(onChange).not.toHaveBeenCalled();
    });
  });
});

describe('lazy', () => {
  it('has already rendered all tab contents if it is not lazy', () => {
    renderTabs({ lazy: false });
    const contentArr = screen.getAllByRole('tabpanel');
    expect(contentArr.length).toBeGreaterThan(0);
    contentArr.forEach(content => {
      expect(content).toBeInTheDocument();
    });
  });

  it('should not render rest tab contents if it is lazy', () => {
    renderTabs({ lazy: true });
    const contentArr = screen.getAllByRole('tabpanel');
    const [, ...rest] = contentArr;
    rest.forEach(content => {
      expect(content).toBeInTheDocument();
    });
  });
});

describe('Tabs', () => {
  behavesAsComponent({ Component: Tabs, toRender: () => <Tabs>tabs</Tabs> });
  it('passes a11y test', async () => {
    const { container } = renderTabs({});
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Tabs.List', () => {
  behavesAsComponent({ Component: Tabs.List });
});

describe('Tabs.Trigger', () => {
  behavesAsComponent({ Component: Tabs.Trigger });
});

describe('Tabs.Content', () => {
  behavesAsComponent({ Component: Tabs.Content });
});

function behavesAsComponent({ Component }: any) {
  it('sets a valid displayName', () => {
    expect(Component.displayName).toMatch(COMPONENT_DISPLAY_NAME_REGEX);
  });
}
