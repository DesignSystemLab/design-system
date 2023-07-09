# Box

Box는 스타일링을 위한 기본적인 UI 컴포넌트입니다. 기본적으로 `div`로 렌더링되며, `as` 속성을 사용하여 원하는 요소로 변경할 수 있습니다.

## Usage

[Storybook](https://designsystemlab.github.io/design-system/?path=/docs/layout-box--basic)

```jsx
<Box style={{ width: '64px', height: '64px' }}>Some Content..</Box>
```

## Props

### Box

| Property        | Allow Types         | Description                   | Default       |
| --------------- | ------------------- | ----------------------------- | ------------- |
| as              | `React.ElementType` | Elemenet Type                 | `div`         |
| backgroundColor | `ColorToken`        | Background 색상을 지정합니다. | `transparent` |
| color           | `CorlorToken`       | Color 색상을 지정합니다.      |               |
| style           | `CssObject`         | 추가적인 스타일을 지정합니다. |               |
