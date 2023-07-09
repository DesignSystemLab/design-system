# Textarea

Textarea 컴포넌트는 여러 줄을 허용하는 텍스트 입력 공간입니다. `smart` 속성을 통해 자동으로 높이 조절을 제공합니다.

## Usage

[Storybook](https://designsystemlab.github.io/design-system/?path=/docs/actions-textarea--basic)

```jsx
<Textarea />
<Textarea resize="smart" placeholder="내용을 입력해주세요." />
<Textarea maxWidth={640} defaultValue={'안녕하세요.'} resize="horizontal" />
<Textarea maxWidth={640} defaultValue={'Red Style!'} color="red-darken4" resize="none" />
<Textarea
  maxWidth={640}
  onClick={e => alert(e.target.value)}
  defaultValue={'Click to Alert Message!'}
  color="green-base"
  resize="none"
/>
<Textarea resize="vertical">
  <Textarea.Label id="asd">Article</Textarea.Label>
</Textarea>
```

## Props

### Textarea

| Property     | Allow Types                            | Description                                                                                                    | Default     |
| ------------ | -------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------- |
| children     | `React.ReactNode`                      | Textarea의 자식 요소입니다.                                                                                    |             |
| resize       | `vertical` `horizontal` `smart` `none` | 자동으로 사이즈를 결정 짓는 방향을 선택 합니다. `smart` 일 경우 높이가 자동으로 텍스트 길이에 따라 변화합니다. | `none`      |
| appearance   | `standard` `none`                      | Textarea UI 모양을 지정합니다. `none` 일 경우 외곽선이 표시되지 않습니다.                                      | `standard`  |
| color        | `Color`                                | Textarea의 색상을 지정합니다.                                                                                  | `grey-base` |
| disabled     | `boolean`                              | Textarea의 비활성화 여부를 지정합니다.                                                                         | `false`     |
| maxWidth     | `number`                               | Textarea의 최대 너비를 지정합니다.                                                                             | `480`       |
| maxHeight    | `number`                               | Textarea의 최대 높이를 지정합니다.                                                                             | `64`        |
| defaultValue | `string`, `number`                     | Textarea의 기본 값을 지정합니다.                                                                               |             |
