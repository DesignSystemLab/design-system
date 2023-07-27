# Radio

Radio 컴포넌트는 정의된 옵션에서, 특정 옵션 값을 선택할 수 있는 UI 컴포넌트입니다. 단일 값만 선택할 수 있습니다.

## Usage

[Storybook](https://designsystemlab.github.io/design-system/?path=/docs/forms-radio--basic)

```jsx
const RadioExample = args => {
  const [value, setValue] = useState(null);
  const handleRadioChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <p>Select Value : {value}</p>
      <Radio.Group defaultValue="mario" onChange={handleRadioChange}>
        <Radio defaultChecked color="red-base" value="mario">
          Mario
        </Radio>
        <Radio value="luigi" color="green-base">
          Luigi
        </Radio>
        <Radio value="peach" color="pink-lighten3">
          Peach
        </Radio>
      </Radio.Group>
    </>
  );
};
```

### Radio

| Property       | Allow Types                 | Description                                                                                       | Default |
| -------------- | --------------------------- | ------------------------------------------------------------------------------------------------- | ------- |
| color          | `Color`                     | Radio의 색상을 지정합니다.                                                                        | `font`  |
| name           | `string`                    | Radio의 `name`을 지정합니다.                                                                      |         |
| value          | `string`,`number`,`boolean` | Radio의 `value`를 지정합니다.                                                                     |         |
| size           | `sm`, `md`, `lg`            | Radio UI의 크기를 지정합니다.                                                                     | `md`    |
| disabled       | `boolean`                   | 비활성화 여부를 지정합니다. `true` 일 경우, 선택되지 않습니다.                                    | `false` |
| readonly       | `boolean`                   | 읽기 전용 속성 입니다. 일반 Radio와 동일한 스타일을 유지하지만 `true` 일 경우, 선택되지 않습니다. | `false` |
| defaultChecked | `boolean`                   | 렌더링 시 기본적으로 선택 상태임을 지정합니다.                                                    | `false` |

### Radio.Group

| Property     | Allow Types       | Description                               | Default |
| ------------ | ----------------- | ----------------------------------------- | ------- |
| children     | `React.ReactNode` | Radio 요소들을 그룹화시킬 수 있습니다.    |         |
| defaultValue | `string`          | 그룹 내 Radio에서의 기본 값을 지정합니다. |         |
