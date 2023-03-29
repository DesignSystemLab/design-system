import React from 'react';
import { debug } from 'jest-preview';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Textarea } from '../src';

describe('Textarea', () => {
  it('Textarea를 렌더링한다.', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeDefined();
  });

  it('Textarea의 초기 value는 빈 값으로 표시된다.', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea).toHaveValue('');
  });

  it('비활성화된 Textarea는 입력이 불가능하다.', async () => {
    render(<Textarea disabled />);

    const user = userEvent.setup();
    const textarea = screen.getByRole('textbox');
    await user.type(textarea, 'Test');
    expect(textarea).toBeDisabled();
    expect(textarea).toHaveValue('');
  });

  it('defaultValue 속성을 갖는 Textarea는 전달된 defaultValue를 초기에 표시된다.', () => {
    render(<Textarea defaultValue={'Hello'} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('Hello');
  });

  it('Placeholder 속성을 갖는 Textarea는 placeholder 표시와 aria-placeholder 속성이 활성화된다.', () => {
    const placeholderMessage = '내용을 입력하시오.';
    render(<Textarea placeholder={placeholderMessage} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('placeholder', placeholderMessage);
  });

  it('Placeholder 속성을 갖는 Textarea는 placeholder 표시와 aria-placeholder 속성이 활성화된다.', () => {
    const placeholderMessage = '내용을 입력하시오.';
    render(<Textarea placeholder={placeholderMessage} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('placeholder', placeholderMessage);
    expect(textarea).toHaveAttribute('aria-placeholder', placeholderMessage);
  });

  it('resize 속성을 갖는 Textarea는 resize 스타일 값이 변경된다.', () => {
    render(<Textarea resize="horizontal" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveStyle({
      resize: 'horizontal'
    });
  });

  it('resize 속성이 smart인 경우 Textarea는 사용자의 입력 값에 따라 height이 동적으로 조절된다.', async () => {
    const user = userEvent.setup();
    render(<Textarea resize="smart" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveStyle({
      height: '64px'
    });
    await user.type(
      textarea,
      '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요'
    );

    expect(textarea).toHaveAttribute('style');
    expect(textarea).not.toHaveValue('');
  });

  it('eventHandler를 갖는 Textarea는 해당 event를 발생시킨다.', async () => {
    const user = userEvent.setup();
    const handleValueChage = jest.fn();
    const handleClick = jest.fn();

    render(<Textarea onChange={handleValueChage} onClick={handleClick} />);
    const textarea = screen.getByRole('textbox');

    await user.click(textarea);
    await user.type(textarea, 'test');

    expect(handleClick).toHaveBeenCalledTimes(2);
    expect(handleValueChage).toHaveBeenCalledTimes(4);
  });

  it('Label 컴포넌트를 자식으로 갖는 Textarea는 label 요소를 표시한다.', () => {
    const renderTextarea = render(
      <Textarea>
        <Textarea.Label>받아쓰기</Textarea.Label>
      </Textarea>
    );

    const label = renderTextarea.container.querySelector('label');
    expect(label).toBeDefined();
    expect(label).toHaveTextContent('받아쓰기');
  });

  it('label의 for 속성은 textarea의 id와 일치해야한다. ', () => {
    const renderTextarea = render(
      <Textarea>
        <Textarea.Label>받아쓰기</Textarea.Label>
      </Textarea>
    );
    const textarea = screen.getByRole('textbox');
    const label = renderTextarea.container.querySelector('label');
    expect(textarea.getAttribute('id')).toEqual(label?.getAttribute('for'));
  });
});
