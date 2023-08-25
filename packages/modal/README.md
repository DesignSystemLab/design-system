# Modal

사용자에게 모달(dialog) 형태로 컨텐츠를 표시하는 UI요소입니다.

## Usage

[Storybook](https://designsystemlab.github.io/design-system/?path=/docs/actions-modal--basic)

```jsx
<Modal>
  <Modal.Trigger />
  <Modal.Portal />
</Modal>
```

## Props

### Modal

| Property            | Allow Types  | Description                                                | Default  |
| ------------------- | ------------ | ---------------------------------------------------------- | -------- | ------ | --------------------------- | ------- |
| open                | `boolean`    | Modal의 `open` 상태를 지정합니다.                         | `false`  |
| onOpen              | `() => void` | Modal이 열릴 때 발생하는 이벤트 입니다.                   |          |
| onClose             | `() => void` | Modal이 닫힐 때 발생하는 이벤트 입니다.                   |          |
| hasCloseIcon        | `boolean`    | Modal의 우측 상단에 닫기 아이콘을 표시합니다.             | `true`   |
| disableOverlayClose | `boolean`    | Overlay를 클릭해서 Modal을 닫는 액션을 사용하지 않습니다. | `false`  |
### Modal.Trigger

| Property | Allow Types       | Description                     | Default |
| -------- | ----------------- | ------------------------------- | ------- |
| children | `React.ReactNode` | Modal을 열 수 있게 해주는 요소입니다. |         |

### Modal.Portal

| Property | Allow Types       | Description                    | Default |
| -------- | ----------------- | ------------------------------ | ------- |
| children | `React.ReactNode` | Modal의 컨텐츠가 들어갑니다. |         |
