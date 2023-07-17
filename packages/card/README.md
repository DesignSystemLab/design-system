# Card

Card 컴포넌트는 `Flexible`한 UI 컴포넌트 입니다. 특정 주제에 대한 제목과 내용을 담고 있으며 수직 및 수평 방향을 모두 지원합니다.

## Usage

[Storybook](https://designsystemlab.github.io/design-system/?path=/docs/data-display-card--basic)

```jsx
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Divider />
  <Card.Body>Body Content..</Card.Body>
  <Card.Divider />
  <Card.Footer>Footer Content..</Card.Footer>
</Card>
```

## Props

### Card

| Property  | Allow Types                                         | Description                                                | Default       |
| --------- | --------------------------------------------------- | ---------------------------------------------------------- | ------------- |
| as        | `React.ElementType`                                 | Element Type                                               | `div`         |
| style     | `CssObject`                                         | 추가적인 스타일을 지정합니다.                              |               |
| variant   | `elevated` `outlined` `filled`                      | Card 스타일을 지정합니다.                                  | `elevated`    |
| color     | `ColorToken`                                        | Color 색상을 지정합니다. **filled 스타일에만 적용됩니다.** | `primary-500` |
| direction | `vertical`,`horizontal`                             | Card의 방향을 지정합니다.                                  | `vertical`    |
| align     | `start` `end` `center` `between` `around` `stretch` | Card의 `align-items` 속성을 지정합니다.                    | `start`       |
| justify   | `start` `end` `center` `between` `around` `stretch` | Card의 `justify-content` 속성을 지정합니다.                | `start`       |
| size      | `sm` `md` `lg`                                      | Card의 기본 크기를 지정합니다.                             | `md`          |

### Card.Header

| Property | Allow Types         | Description                   | Default |
| -------- | ------------------- | ----------------------------- | ------- |
| as       | `React.ElementType` | Element Type                  | `div`   |
| style    | `CssObject`         | 추가적인 스타일을 지정합니다. |         |

### Card.Body

| Property | Allow Types         | Description                   | Default |
| -------- | ------------------- | ----------------------------- | ------- |
| as       | `React.ElementType` | Element Type                  | `div`   |
| style    | `CssObject`         | 추가적인 스타일을 지정합니다. |         |

### Card.Footer

| Property | Allow Types         | Description                   | Default |
| -------- | ------------------- | ----------------------------- | ------- |
| as       | `React.ElementType` | Element Type                  | `div`   |
| style    | `CssObject`         | 추가적인 스타일을 지정합니다. |         |
