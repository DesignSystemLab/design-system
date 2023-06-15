import React from 'react';
import { debug } from 'jest-preview';
import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from '../src';

const handleValueChage = jest.fn();
describe('Select', () => {
  it('Select 컴포넌트를 렌더링한다.', () => {
    render(
      <Select>
        <Select.Trigger placeholder="skills" />
        <Select.Option value="javascript">JavaScript</Select.Option>
        <Select.Option value="typescript">TypeScript</Select.Option>
        <Select.Option value="html5">HTML</Select.Option>
        <Select.Option value="react">React</Select.Option>
        <Select.Option value="java">Java</Select.Option>
      </Select>
    );
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    const select = screen.getByRole('listbox');
    const selectLabel = screen.getByRole('label');
    const options = screen.getAllByRole('option');
    expect(select).toBeDefined();
    expect(selectLabel.textContent).toBe('skills');
    expect(options).toHaveLength(5);
  });

  it('disabled 속성을 갖는 Select는 SelectOption을 노출하지 않는다.', () => {
    const selectRender = render(
      <Select disabled>
        <Select.Trigger placeholder="programming-languages" />
        <Select.Option value="javascript">JavaScript</Select.Option>
        <Select.Option value="typescript">TypeScript</Select.Option>
        <Select.Option value="react">React</Select.Option>
        <Select.Option value="java">Java</Select.Option>
      </Select>
    );
    const trigger = screen.getByRole('button');
    const selectList = selectRender.container.querySelector('[id^="jdesignlab-select-list"]');
    fireEvent.click(trigger);

    if (selectList !== null) {
      const style = window.getComputedStyle(selectList);
      expect(style.visibility).toBe('hidden');
      return;
    }

    throw new Error('#jdesignlab-select-list 요소가 존재하지 않습니다.');
  });

  it('disabled item을 갖는 SelectOption은 click 이벤트가 발생하지 않는다.', () => {
    render(
      <Select onValueChange={handleValueChage}>
        <Select.Trigger placeholder="programming-languages" />
        <Select.Option value="javascript" disabled>
          JavaScript
        </Select.Option>
        <Select.Option value="typescript">TypeScript</Select.Option>
        <Select.Option value="react" disabled>
          React
        </Select.Option>
        <Select.Option value="java">Java</Select.Option>
      </Select>
    );
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    const options = screen.getAllByRole('option');
    const disabledOptions = options.filter(option => option.getAttribute('aria-disabled') === 'true');

    expect(options).toHaveLength(4);
    expect(disabledOptions).toHaveLength(2);
    fireEvent.click(disabledOptions[0]);
    fireEvent.click(disabledOptions[1]);
    expect(handleValueChage).not.toHaveBeenCalled();
  });

  it('Combobox 컴포넌트를 렌더링한다.', () => {
    render(
      <Select>
        <Select.Trigger placeholder="skills">
          <Select.Input />
        </Select.Trigger>
        <Select.Option value="javascript">JavaScript</Select.Option>
        <Select.Option value="typescript">TypeScript</Select.Option>
        <Select.Option value="html5">HTML</Select.Option>
        <Select.Option value="react">React</Select.Option>
        <Select.Option value="java">Java</Select.Option>
      </Select>
    );
    const combobox = screen.getByRole('combobox');
    expect(combobox).toBeDefined();
    debug();
  });

  it('검색어와 일치하는 ComboboxOption 컴포넌트를 렌더링한다.', () => {
    render(
      <Select>
        <Select.Trigger placeholder="skills">
          <Select.Input />
        </Select.Trigger>
        <Select.Option value="javascript">JavaScript</Select.Option>
        <Select.Option value="typescript">TypeScript</Select.Option>
        <Select.Option value="html5">HTML</Select.Option>
        <Select.Option value="react">React</Select.Option>
        <Select.Option value="java">Java</Select.Option>
      </Select>
    );
    const searchInput = screen.getByRole('searchbox');
    fireEvent.input(searchInput, { target: { value: 'HTML' } });
    const combobox = screen.getByRole('combobox');
    const options = screen.getAllByRole('option');

    expect(combobox).toBeDefined();
    expect(options).toHaveLength(1);
  });

  it('검색어와 일치하는 복수의 ComboboxOption 컴포넌트를 렌더링한다.', () => {
    render(
      <Select>
        <Select.Trigger placeholder="strawberryMenu">
          <Select.Input />
        </Select.Trigger>
        <Select.Option value="strawberryLatte">🥛 딸기라떼</Select.Option>
        <Select.Option value="strawberryShake">🍶 딸기 밀키 쉐이크</Select.Option>
        <Select.Option value="strawberryJuice">🍓 딸기쥬스</Select.Option>
        <Select.Option value="strawberryIceShake">🍧 딸기 빙수</Select.Option>
        <Select.Option value="strawberryCookie">🍪 딸기 쿠키</Select.Option>
        <Select.Option value="strawberryCake">🍰 딸기 케이크</Select.Option>
      </Select>
    );
    const searchInput = screen.getByRole('searchbox');
    fireEvent.input(searchInput, { target: { value: '딸기' } });
    const combobox = screen.getByRole('combobox');
    const options = screen.getAllByRole('option');

    expect(combobox).toBeDefined();
    expect(options).toHaveLength(6);
  });

  it('ComboboxOption 값이 검색어와 일치하지 않을 경우 "검색 결과가 없습니다." 메시지를 출력한다.', () => {
    const { getByText } = render(
      <Select>
        <Select.Trigger placeholder="strawberryMenu">
          <Select.Input />
        </Select.Trigger>
        <Select.Option value="strawberryLatte">🥛 딸기라떼</Select.Option>
        <Select.Option value="strawberryShake">🍶 딸기 밀키 쉐이크</Select.Option>
        <Select.Option value="strawberryJuice">🍓 딸기쥬스</Select.Option>
        <Select.Option value="strawberryIceShake">🍧 딸기 빙수</Select.Option>
        <Select.Option value="strawberryCookie">🍪 딸기 쿠키</Select.Option>
        <Select.Option value="strawberryCake">🍰 딸기 케이크</Select.Option>
      </Select>
    );
    const searchInput = screen.getByRole('searchbox');
    fireEvent.input(searchInput, { target: { value: '포도' } });
    const notFound = screen.getByRole('note');
    const notFoundMessage = getByText('검색 결과가 없습니다.');
    expect(notFound).toBeDefined();
    expect(notFoundMessage).toBeDefined();
  });

  it('disabled item을 갖는 ComboboxOption 컴포넌트는 클릭 이벤트가 발생하지 않는다.', () => {
    render(
      <Select onValueChange={handleValueChage}>
        <Select.Trigger placeholder="strawberryMenu">
          <Select.Input />
        </Select.Trigger>
        <Select.Option value="strawberryLatte" disabled>
          🥛 딸기라떼
        </Select.Option>
        <Select.Option value="strawberryShake">🍶 딸기 밀키 쉐이크</Select.Option>
        <Select.Option value="strawberryJuice">🍓 딸기쥬스</Select.Option>
        <Select.Option value="strawberryIceShake">🍧 딸기 빙수</Select.Option>
        <Select.Option value="strawberryCookie">🍪 딸기 쿠키</Select.Option>
        <Select.Option value="strawberryCake">🍰 딸기 케이크</Select.Option>
      </Select>
    );

    const searchInput = screen.getByRole('searchbox');
    fireEvent.input(searchInput, { target: { value: '딸기' } });
    const options = screen.getAllByRole('option');
    const disabledOptions = options.filter(option => option.getAttribute('aria-disabled') === 'true');

    expect(options).toHaveLength(6);
    expect(disabledOptions).toHaveLength(1);
    fireEvent.click(disabledOptions[0]);
    expect(handleValueChage).not.toHaveBeenCalled();
  });
});
