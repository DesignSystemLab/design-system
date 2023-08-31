# Drawer

Drawer 컴포넌트는 마치 서랍 처럼 화면 사이드에서 정보를 출력하는 UI 입니다.

## Usage

[Storybook](https://designsystemlab.github.io/design-system/?path=/docs/actions-drawer--basic)

```jsx
<Drawer>
  <Drawer.Trigger>
    <Button>Basic</Button>
  </Drawer.Trigger>
  <Drawer.Portal></Drawer.Portal>
</Drawer>
```

## Props

### Drawer

| Property            | Allow Types  | Description                                                | Default  |
| ------------------- | ------------ | ---------------------------------------------------------- | -------- | ------ | --------------------------- | ------- |
| open                | `boolean`    | Drawer의 `open` 상태를 지정합니다.                         | `false`  |
| onOpen              | `() => void` | Drawer가 열릴 때 발생하는 이벤트 입니다.                   |          |
| onClose             | `() => void` | Drawer가 닫힐 때 발생하는 이벤트 입니다.                   |          |
| full                | `boolean`    | full size 형태의 Drawer로 사용합니다.                      | `false`  |
| placement           | `top`        | `right`                                                    | `bottom` | `left` | Drawer의 방향을 지정합니다. | `right` |
| hasCloseIcon        | `boolean`    | Drawer의 우측 상단에 닫기 아이콘을 표시합니다.             | `true`   |
| disableOverlayClose | `boolean`    | Overlay를 클릭해서 Drawer를 닫는 액션을 사용하지 않습니다. | `false`  |

### Drawer.Trigger

| Property | Allow Types       | Description                            | Default |
| -------- | ----------------- | -------------------------------------- | ------- |
| children | `React.ReactNode` | Drawer를 열 수 있게 해주는 요소입니다. |         |

### Drawer.Portal

| Property | Allow Types       | Description                        | Default |
| -------- | ----------------- | ---------------------------------- | ------- |
| children | `React.ReactNode` | Drawer에 표시될 내용이 들어갑니다. |         |
