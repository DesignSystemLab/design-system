# Checkbox

사용자가 선택하거나 선택을 해제할 수 있는 체크박스 입력 요소를 나타냅니다.

## Usage

[Storybook](https://###)

```jsx
<Checkbox>선택</Checkbox>
```

## Props

### Checkbox

| Property       | Allow Types                            | Description                                                             | Default       |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------- | ------------- |
| value          | `string` `number`                      | 체크박스가 선택되었을 때 해당 체크박스의 값을 나타냅니다.               | `undefined`   |
| checked        | `boolean`                              | 체크박스의 선택 상태를 나타냅니다.                                      | `false`       |
| defaultChecked | `boolean`                              | 체크박스의 기본 선택 상태를 나타냅니다.                                 | `false`       |
| disabled       | `string` `number`                      | 체크박스를 비활성화합니다                                               | `false`       |
| onChange       | `(event: CheckboxChangeEvent) => void` | 체크박스의 선택 상태가 변경되었을 때 호출되는 이벤트 핸들러 함수입니다. | `undefined`   |
| color          | `ColorToken`                           | 체크박스의 색상을 지정합니다.                                           | `primary-500` |

### Checkbox.Group

| Property     | Allow Types | Description | Default                                      |
| ------------ | ----------- | ----------- | -------------------------------------------- | ---- |
| defaultValue | `(string    | number)[]`  | 체크박스 그룹의 기본 선택 상태를 지정합니다. | `[]` |
