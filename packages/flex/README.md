# Flex

요소들을 유연하게 정렬하고 배치하기 위한 컴포넌트입니다.

## Usage

[Storybook](https://designsystemlab.github.io/design-system/?path=/docs/layout-flex--basic)

```jsx
<Flex>
  <Flex.Item>Hello</Flex.Item>
  <Flex.Item>World</Flex.Item>
</Flex>
```

## Props

### Flex

| Property  | Allow Types                                                                    | Description                                                                    | Default      |
| --------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------ |
| as        | `React.ElementType`                                                            | html 태그를 별도로 지정해줍니다.                                               | `div`        |
| style     | `CSSObject`                                                                    | 별도의 커스텀 스타일을 지정해줍니다.                                           | `row`        |
| direction | `row` `row-reverse` `column` `column-reverse`                                  | 요소들의 배치 방향을 지정해줍니다.(`flex-direction`)                           | `row`        |
| wrap      | `nowrap` `wrap ` `wrap-reverse`                                                | 요소들의 줄바꿈 형식을 지정해줍니다 (`flex-wrap`)                              | `nowrap`     |
| justify   | `flex-start` `flex-end` `center` `space-between` `space-around` `space-evenly` | 컨테이너 내부 요소들의 가로방향 정렬 방식을 지정해줍니다 (`justify-content`)   | `flex-start` |
| items     | `stretch` `flex-start` `flex-end` `center` `baseline`                          | 컨테이너 내부 요소들의 세로방향 정렬 방식을 지정해줍니다 (`align-items`)       | `flex-start` |
| content   | `stretch` `flex-start` `flex-end` `space-between` `space-around`               | 컨테이너 내부 요소들 사이의 여유 공간을 조절하는 속성입니다. (`align-content`) | `flex-start` |
| gap       | `number` `string`                                                              | 요소들의 간격을 지정해줍니다.                                                  | `0`          |

### Flex.Item

| Property | Allow Types                                                  | Description                                                      | Default |
| -------- | ------------------------------------------------------------ | ---------------------------------------------------------------- | ------- |
| as       | `React.ElementType`                                          | html 태그를 별도로 지정해줍니다.                                 | `div`   |
| style    | `CSSObject`                                                  | 별도의 커스텀 스타일을 지정해줍니다.                             | `{}`    |
| flex     | `number`                                                     | 해당 요소의 크기를 유연하게 조절합니다. (`flex-basis`)           | `1`     |
| self     | `auto` `stretch` `flex-start` `flex-end` `center` `baseline` | 개별 요소에 적용되는 세로 정렬 방식을 지정합니다. (`align-self`) | `auto`  |
| order    | `number`                                                     | 컨테이너 개별 요소의 순서를 지정해줍니다.                        | `0`     |
