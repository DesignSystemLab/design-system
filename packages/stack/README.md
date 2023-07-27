# Stack

Stack 컴포넌트는 요소들을 공통으로 그룹화하고, 요소 사이에 수평&수직 레이아웃을 간편하게 배치시킬 수 있는 레이아웃입니다.

## Usage

[Storybook](https://designsystemlab.github.io/design-system/?path=/docs/layout-stack--basic)

```jsx
<Stack direction="vertical" justify="stretch" spacing="20px">
  <div style={{ height: '64px', width: '64px', backgroundColor: '#ff4d4d' }}>first</div>
  <div style={{ height: '64px', width: '64px', backgroundColor: '#3ae374' }}>second</div>
  <div style={{ height: '64px', width: '64px', backgroundColor: '#18dcff' }}>third</div>
  <div style={{ height: '64px', width: '64px', backgroundColor: '#7d5fff' }}>fourth</div>
</Stack>
```

## Props

### Stack

| Property   | Allow Types                                         | Description                                      | Default       |
| ---------- | --------------------------------------------------- | ------------------------------------------------ | ------------- |
| children   | `React.ReactNode`                                   | Stack의 자식 요소입니다.                         |               |
| as         | `React.ElementType`                                 | 별도의 ElementType을 지정합니다.                 | `div`         |
| spacing    | `xs` `sm` `md` `lg` `xl`                            | 요소 사이의 간격을 지정합니다.                   | `transparent` |
| align      | `start` `end` `center` `between` `around` `stretch` | `align` 속성을 지정합니다.                       | `start`       |
| justify    | `start` `end` `center` `between` `around` `stretch` | `justify-content` 속성을 지정합니다.             | `start`       |
| direction  | `vertical` `horizontal`                             | 레이아웃의 방향을 지정합니다.                    | `horizontal`  |
| wrap       | `boolean`                                           | `nowrap` 여부를 지정합니다.                      | `false`       |
| responsive | `boolean`                                           | 디바이스 UI에 맞춰 반응형으로 방향을 결정합니다. | `false`       |
