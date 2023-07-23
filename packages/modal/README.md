# Modal

사용자에게 모달(팝업) 형태로 컨텐츠를 표시하는 UI요소입니다.

## Usage

[Storybook](https://###)

```jsx
<Modal>
  <Modal.Trigger />
  <Modal.Header />
  <Modal.Body />
  <Modal.Footer />
</Modal>
```

## Props

### Modal

| Property     | Allow Types  | Description                                                                                             | Default     |
| ------------ | ------------ | ------------------------------------------------------------------------------------------------------- | ----------- |
| open         | `boolean`    | 모달의 열림/ 닫힘 상태를 나타내는 프로퍼티입니다. `true`일 경우 모달이 열리며, `false`일 경우 닫힙니다. | `false`     |
| onOpen       | `() => void` | 모달이 열릴 때 실행되는 콜백함수를 지정합니다.                                                          | `undefined` |
| onClose      | `() => void` | 모달이 닫힐 때 실행되는 콜백함수를 지정합니다.                                                          | `undefined` |
| hasCloseIcon | `boolean`    | 모달 우측 상단에 닫기 아이콘을 표시할지 여부를 지정합니다. 기본값은 뒷 배경을 누르면 닫힙니다.          | `false`     |
| width        | `number`     | 모달의 가로너비를 지정합니다.                                                                           | `500`       |
| lazy         | `boolean`    | 모달의 내용을 지연 로딩하여 필요한 때만 렌더링하도록 지정합니다.                                        | `false`     |

### Modal.Trigger

| Property | Allow Types       | Description                     | Default |
| -------- | ----------------- | ------------------------------- | ------- |
| children | `React.ReactNode` | Modal.Trigger 자식 요소 입니다. |         |

### Modal.Header

| Property | Allow Types       | Description                    | Default |
| -------- | ----------------- | ------------------------------ | ------- |
| children | `React.ReactNode` | Modal.Header 자식 요소 입니다. |         |

### Modal.Body

| Property | Allow Types       | Description                  | Default |
| -------- | ----------------- | ---------------------------- | ------- |
| children | `React.ReactNode` | Modal.Body 자식 요소 입니다. |         |

### Modal.Footer

| Property | Allow Types       | Description                    | Default |
| -------- | ----------------- | ------------------------------ | ------- |
| children | `React.ReactNode` | Modal.Footer 자식 요소 입니다. |         |
