# Button

사용자의 클릭으로 특정 동작을 실행하는데 사용됩니다. 다양한 액션을 트리거하거나, 사용자에게 여러 선택지를 제공하는 등 다양한 용도로 사용될 수 있습니다.

## Usage

[Storybook](https://designsystemlab.github.io/design-system/?path=/docs/actions-button--basic)

```jsx
<Button>버튼</Button>
```

## Props

| Property | Allow Types                                 | Description                                                    | Default       |
| -------- | ------------------------------------------- | -------------------------------------------------------------- | ------------- |
| onClick  | `() => void`                                | 버튼 클릭 시 이벤트를 이벤트를 호출합니다.                     | `undefined`   |
| variant  | `solid` `outline` `ghost` `link` `unstyled` | 버튼의 시각적 요소를 변경하여 다양한 버튼 디자인을 제공합니다. | `solid`       |
| size     | `sm` `md` `lg` `xl`                         | 버튼의 크기를 조절합니다.                                      | `md`          |
| disabled | `boolean`                                   | 버튼을 비활성화합니다.                                         | `false`       |
| color    | `ColorToken`                                | 버튼의 색상을 지정합니다.                                      | `primary-500` |
| full     | `boolean`                                   | 버튼의 너비를 부모요소의 전체 너비만큼 확장합니다.             | `false`       |
| icon     | `React.ReactElement`                        | 버튼 좌측에 아이콘을 삽입합니다.                               | `undefined`   |
| as       | `React.ElementType`                         | html 태그를 별도로 지정해줍니다.                               | `button`      |
