import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Tooltip } from '../src';
import { debug } from 'jest-preview';

expect.extend(toHaveNoViolations);
const COMPONENT_DISPLAY_NAME_REGEX = /^[A-Z][A-Za-z]+(\.[A-Z][A-Za-z]+)*$/;
const TOOLTIP_TARGET = 'tooltip-target';
const TOOLTIP_CONTENT = 'tooltip-content';

function renderTooltip() {
  return render(
    <Tooltip>
      <Tooltip.Target data-testid={TOOLTIP_TARGET}>target1</Tooltip.Target>
      <Tooltip.Content>content</Tooltip.Content>
    </Tooltip>
  );
}

describe('tooltip features', () => {
  it('should not show content until target is hovered', () => {
    renderTooltip();
    const content = document.querySelector('[role="tooltip"]')!;
    expect(content).not.toBeVisible();
  });

  it('shows tooltip content when target is hovered', () => {
    renderTooltip();

    // TODO : screen.getBy~ 로 dom 객체 못가져오는 문제 해결하기
    // const target = screen.getByTestId(TOOLTIP_TARGET);
    // const content = screen.getByRole('tooltip');

    const target = document.querySelector('.tooltip_target')!;
    const content = document.querySelector('[role="tooltip"]')!;
    userEvent.hover(target);
    waitFor(() => {
      expect(content).toBeVisible();
    });
  });
});

describe('Tooltip', () => {
  behavesAsComponent({ Component: Tooltip, toRender: () => <Tooltip></Tooltip> });

  it('passes a11y test', async () => {
    const { container } = renderTooltip();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Tooltip.Content', () => {
  behavesAsComponent({ Component: Tooltip.Content, toRender: () => <Tooltip.Content></Tooltip.Content> });
});

describe('Tooltip.Target', () => {
  behavesAsComponent({ Component: Tooltip.Target, toRender: () => <Tooltip.Target></Tooltip.Target> });
});

function behavesAsComponent({ Component }: any) {
  it('sets a valid displayName', () => {
    expect(Component.displayName).toMatch(COMPONENT_DISPLAY_NAME_REGEX);
  });
}
