# Tooltip

사용자에게 모달(팝업) 형태로 컨텐츠를 표시하는 UI요소입니다.

## Usage

[Storybook](https://designsystemlab.github.io/design-system/?path=/docs/data-display-tooltip--basic)

```jsx
<Tooltip>
  <Tooltip.Target />
  <Tooltip.Content />
</Tooltip>
```

## Props

### Tooltip

| Property  | Allow Types                                                                                                                           | Description                      | Default |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| placement | `top-left` `top` `top-right` `right` `right-top` `right-bottom` `left` `left-top` `left-bottom` `bottom-right` `bottom` `bottom-left` | 툴팁이 나타날 위치를 조정합니다. | `top`   |
| gap       | `number`                                                                                                                              | 툴팁의 간격을 조정합니다.        | `4`     |
