import { render, screen, fireEvent, getByText } from '@testing-library/react';
import { Select } from '../src';

const handleValueChage = jest.fn();
describe('Select', () => {
  it('Select 컴포넌트 렌더링.', () => {
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

  it('disabled 속성을 갖는 Select 컴포넌트.', () => {
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
    const selectList = selectRender.container.querySelector('#jdesignlab-select-list');
    fireEvent.click(trigger);

    if (selectList !== null) {
      const style = window.getComputedStyle(selectList);
      expect(style.display).toBe('none');
      return;
    }

    throw new Error('#jdesignlab-select-list 요소가 존재하지 않습니다.');
  });

  it('disabled item을 갖는 Select 컴포넌트.', () => {
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

  it('Combobox 컴포넌트 렌더링.', () => {
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

  it('복수의 검색 결과를 갖는 Combobox.', () => {
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

  it('일치하지 않으면 "검색 결과가 없습니다." 메시지를 출력한다.', () => {
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

  it('disabled item을 갖는 Combobox 컴포넌트.', () => {
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
