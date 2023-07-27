# input

# Checkbox

사용자로부터 텍스트 입력을 받기 위한 UI요소입니다.

## Usage

[Storybook](https://designsystemlab.github.io/design-system/?path=/docs/forms-textinput--basic)

```jsx
<TextInput>
  <TextInput.Label>
  <TextInput.Message>
<TextInput>
```

## Props

### TextInput

| Property  | Allow Types          | Description                                                                            | Default     |
| --------- | -------------------- | -------------------------------------------------------------------------------------- | ----------- |
| type      | `text` `password`    | 텍스트의 입력 타입을 지정합니다.                                                       | `text`      |
| size      | `sm` `md` `lg`       | 컴포넌트의 크기를 조정합니다.                                                          | `md`        |
| clearable | `boolean`            | 사용자가 입력 필드의 내용을 초기화 할 수 있는 아이콘을 컴포넌트 우측 내부에 생성합니다 | `false`     |
| width     | `number`             | 컴포넌트의 가로 너비를 조절합니다.                                                     | `100%`      |
| maxLength | `number`             | 입력 필드에 입력 가능한 최대 문자수를 나타냅니다.                                      | `256`       |
| icon      | `React.ReactElement` | 컴포넌트 좌측 내부에 아이콘을 삽입합니다.                                              | `undefined` |

### TextInput.Label

| Property | Allow Types | Description                    | Default |
| -------- | ----------- | ------------------------------ | ------- |
| children | `string`    | 컴포넌트의 라벨을 지정해줍니다 | ``      |

### TextInput.Message

| Property   | Allow Types | Description                     | Default |
| ---------- | ----------- | ------------------------------- | ------- |
| consistent | `boolean`   | 메세지를 지속적으로 보여줍니다. | `false` |
