# Select

Select 컴포넌트는 정의된 여러 옵션에서, 특정 옵션 값을 선택할 수 있는 UI 컴포넌트입니다. 사용자에게 펼침, 닫힘 효과가 나타납니다.

## Usage

[Storybook](https://designsystemlab.github.io/design-system/?path=/docs/forms-select--basic)

```jsx
const SelectExample = args => {
  const [skill, setSkill] = useState('');
  return (
    <>
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
    </>
  );
};
```

## Props

### Select

| Property      | Allow Types        | Description                                      | Default |
| ------------- | ------------------ | ------------------------------------------------ | ------- |
| color         | `Color`            | Select의 색상을 지정합니다.                      | `font`  |
| defaultValue  | `string`, `number` | Select의 기본 선택 값을 지정합니다.              |         |
| onValueChange | `(value) => void`  | Select Option이 변경될 때 발생하는 이벤트입니다. |         |

### Select.Trigger

| Property    | Allow Types       | Description                                | Default |
| ----------- | ----------------- | ------------------------------------------ | ------- |
| Input       | `React.ReactNode` | Combobox에서 사용될 Input 컴포넌트 입니다. |         |
| placeholder | `string`          | Select의 기본 선택 값을 지정합니다.        |         |

### Select.Option

| Property | Allow Types        | Description                                              | Default |
| -------- | ------------------ | -------------------------------------------------------- | ------- |
| value    | `string`, `number` | Select Optionvalue 값 입니다.                            |         |
| disabled | `boolean`          | 비활성화 여부 입니다. `true` 일 경우, 선택되지 않습니다. | `false` |
