import { Select } from '../src';
import { useState } from 'react';

export default {
  title: 'Components/Select',
  component: Select,
  decorators: [Story => <Story style={{ margin: 'auto 0' }} />]
};

const argTypes = {};

const Template = args => {
  const [strawberryMenu, setStrawberryMenu] = useState('');
  const [skill, setSkill] = useState('');
  return (
    <>
      <div>
        <h2>Combobox</h2>
        <strong>SelectValue: {strawberryMenu || '값을 선택해주세요.'}</strong>
        <Select
          color="red-lighten3"
          defaultValue="strawberryIceShake"
          onValueChange={value => {
            setStrawberryMenu(value);
          }}
        >
          <Select.Trigger placeholder="딸기메뉴">
            <Select.Input />
          </Select.Trigger>
          <Select.Option value="strawberryLatte">🥛 딸기라떼</Select.Option>
          <Select.Option value="strawberryShake">🍶 딸기 밀키 쉐이크</Select.Option>
          <Select.Option value="strawberryJuice">🍓 딸기쥬스</Select.Option>
          <Select.Option value="strawberryIceShake">🍧 딸기 빙수</Select.Option>
          <Select.Option value="strawberryCookie" disabled>
            🍪 딸기 쿠키
          </Select.Option>
          <Select.Option value="strawberryCake">🍰 딸기 케이크</Select.Option>
        </Select>
      </div>
      <hr />
      <div>
        <h2>Selectbox</h2>
        <strong>SelectValue: {skill || '값을 선택해주세요.'}</strong>
        <Select
          color="purple-lighten3"
          defaultValue="react"
          onValueChange={value => {
            setSkill(value);
          }}
        >
          <Select.Trigger placeholder="programming-languages" />
          <Select.Option value="javascript">JavaScript</Select.Option>
          <Select.Option value="typescript">TypeScript</Select.Option>
          <Select.Option value="html5">HTML</Select.Option>
          <Select.Option value="vue" disabled>
            Vue.js
          </Select.Option>
          <Select.Option value="react">React</Select.Option>
          <Select.Option value="java">Java</Select.Option>
        </Select>
      </div>
    </>
  );
};

export const SelectBasic = Template.bind({});
SelectBasic.argTypes = argTypes;
