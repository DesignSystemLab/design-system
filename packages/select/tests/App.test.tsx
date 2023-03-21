import { render, screen } from '@testing-library/react';
import { Select } from '../src';

describe('기본적인 Select 컴포넌트 테스트', () => {
  const test = () => render(<div></div>);
  const select = () =>
    render(
      <Select color="red-lighten3" defaultValue="mario">
        <Select.Trigger placeholder="Mario Characters">
          <Select.Input />
        </Select.Trigger>
        <Select.Option value="mario">
          <span>하이로</span>
        </Select.Option>
        <Select.Option value="mari2">
          <span>하이로</span>
        </Select.Option>
      </Select>
    );
  it('test!!!!!!', () => {
    select();
  });
});
