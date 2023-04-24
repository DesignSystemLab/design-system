import React, { useState } from 'react';
import { debug } from 'jest-preview';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Radio } from '../src';
import RadioGroup from '../src/components/RadioGroup';

describe('Radio', () => {
  it('Radio 컴포넌트를 렌더링한다.', () => {
    render(<Radio>radio</Radio>);
    const radio = screen.getByRole('radio');
    const radioText = screen.getByText('radio');
    expect(radio).toBeInTheDocument();
    expect(radioText).toBeInTheDocument();
  });

  it('Radio 컴포넌트를 클릭하면 checked 상태가 활성화된다.', async () => {
    const handleClick = jest.fn();
    render(
      <div>
        <Radio value="1" onClick={handleClick}>
          first
        </Radio>
        <Radio value="2">second</Radio>
      </div>
    );
    const firstRadio = screen.getAllByRole('radio')[0];
    await userEvent.click(firstRadio);
    expect(firstRadio).toBeChecked();
    expect(handleClick).toBeCalledTimes(1);
  });

  it('Radio 컴포넌트를 클릭하면 해당 value 속성을 갖는다.', async () => {
    const handleClick = jest.fn();
    render(
      <div>
        <Radio value="1" onClick={handleClick}>
          first
        </Radio>
        <Radio value="2">second</Radio>
      </div>
    );
    const firstRadio = screen.getAllByRole('radio')[0];
    await userEvent.click(firstRadio);
    expect(firstRadio.getAttribute('value')).toEqual('1');
  });

  it('Radio컴포넌트의 id와 label의 for 속성은 일치해야한다.', () => {
    const { container } = render(<Radio id="radio-sample">radio</Radio>);
    const input = container.querySelector('input');
    const label = container.querySelector('label');
    expect(input?.getAttribute('id')).toEqual(label?.getAttribute('for'));
  });

  it('readonly 속성을 갖는 Radio 컴포넌트는 checked 상태가 발생하지 않는다.', async () => {
    const handleChange = jest.fn();
    render(
      <div>
        <Radio readonly onChange={handleChange} name="contract">
          Fax
        </Radio>
        <Radio name="contract">Phone</Radio>
      </div>
    );
    const readonlyRadio = screen.getAllByRole('radio')[0];
    await userEvent.click(readonlyRadio);
    expect(readonlyRadio).not.toBeChecked();
    expect(handleChange).toHaveBeenCalled();
  });

  it('disabled 속성을 갖는 Radio 컴포넌트는 checked 상태가 발생하지 않는다.', async () => {
    const handleChange = jest.fn();
    render(
      <div>
        <Radio disabled onChange={handleChange} name="contract">
          Fax
        </Radio>
        <Radio name="contract">Phone</Radio>
      </div>
    );
    const disabledRadio = screen.getAllByRole('radio')[0];
    await userEvent.click(disabledRadio);
    expect(disabledRadio).not.toBeChecked();
  });

  it('name이 동일한 radio 컴포넌트에서 값이 변경될 때 change 이벤트가 발생한다.', async () => {
    const handleChange = jest.fn();
    const handleClick = jest.fn();
    render(
      <div>
        <Radio onChange={handleChange} name="contract">
          Fax
        </Radio>
        <Radio name="contract" onClick={handleClick}>
          Phone
        </Radio>
      </div>
    );
    const firstRadio = screen.getAllByRole('radio')[0];
    const secondRadio = screen.getAllByRole('radio')[1];
    await userEvent.click(secondRadio);
    expect(handleClick).toHaveBeenCalledTimes(1);
    await userEvent.click(firstRadio);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(firstRadio).toBeChecked();
    expect(secondRadio).not.toBeChecked();
  });

  it('name이 동일한 radio 컴포넌트에서 focus 상태일 때 키보드 이벤트로 선택할 수 있다.', async () => {
    render(
      <div>
        <Radio name="sample-radio" value="1">
          first
        </Radio>
        <Radio name="sample-radio" value="2">
          second
        </Radio>
      </div>
    );
    const RadioElements = screen.getAllByRole('radio');
    await userEvent.click(RadioElements[0]);
    await userEvent.keyboard('{ArrowRight}');
    expect(RadioElements[0]).not.toBeChecked();
    expect(RadioElements[1]).toHaveFocus();
    await userEvent.keyboard('{Space}');
    expect(RadioElements[1]).toBeChecked();
  });

  it('RadioGroup으로 정의된 Radio 컴포넌트는 동일한 name 속성을 갖는다.', () => {
    render(
      <RadioGroup>
        <Radio value="1">first</Radio>
        <Radio value="2">second</Radio>
        <Radio value="3">third</Radio>
      </RadioGroup>
    );
    const radioElements = screen.getAllByRole('radio');
    expect(radioElements[0].getAttribute('name')).toEqual(radioElements[1].getAttribute('name'));
    expect(radioElements[1].getAttribute('name')).toEqual(radioElements[2].getAttribute('name'));
    expect(radioElements.length).toBe(3);
  });

  it('RadioGroup 내부에 정의된 Radio 컴포넌트는 기본적으로 동일한 name 속성을 갖는다.', () => {
    render(
      <RadioGroup>
        <Radio value="1">first</Radio>
        <Radio value="2">second</Radio>
        <Radio value="3">third</Radio>
      </RadioGroup>
    );
    const radioElements = screen.getAllByRole('radio');
    expect(radioElements[0].getAttribute('name')).toEqual(radioElements[1].getAttribute('name'));
    expect(radioElements[1].getAttribute('name')).toEqual(radioElements[2].getAttribute('name'));
    expect(radioElements.length).toBe(3);
  });

  it('defaultValue 속성으로 명시된 RadioGroup 컴포넌트는 value를 갖는 Radio 컴포넌트를 기본적으로 checked 상태를 활성화한다.', () => {
    render(
      <RadioGroup defaultValue="1">
        <Radio value="1">first</Radio>
        <Radio value="2">first</Radio>
        <Radio value="3">first</Radio>
      </RadioGroup>
    );
    const radioElements = screen.getAllByRole('radio');
    expect(radioElements[0]).toBeChecked();
    expect(radioElements[1]).not.toBeChecked();
    expect(radioElements[2]).not.toBeChecked();
  });

  it('RadioGroup 내부에 정의된 Radio 컴포넌트는 이벤트 발생 시 Radio 컴포넌트 우선 순서로 발생한다.', async () => {
    const handleParentClick = jest.fn();
    const handleChildrenClick = jest.fn();
    render(
      <RadioGroup onClick={handleParentClick}>
        <Radio value="1" onClick={handleChildrenClick}>
          first
        </Radio>
        <Radio value="2">second</Radio>
        <Radio value="3">third</Radio>
      </RadioGroup>
    );

    const radioGroup = screen.getByRole('radiogroup');
    const firstRadio = screen.getAllByRole('radio')[0];
    expect(radioGroup).toBeInTheDocument();
    await userEvent.click(firstRadio);
    expect(handleChildrenClick).toHaveBeenCalledTimes(1);
    expect(handleParentClick).toHaveBeenCalledTimes(1);
  });
});
