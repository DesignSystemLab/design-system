# Drawer

Drawer 컴포넌트는 마치 서랍 처럼 화면 사이드에서 정보를 출력하는 UI 입니다.

## Usage

[Storybook](https://designsystemlab.github.io/design-system/?path=/docs/actions-drawer--basic)

```jsx
<>
  <Button
    onClick={e => {
      setDrawerOpen(true);
    }}
  >
    OPEN Drawer.
  </Button>
  <Drawer
    open={open}
    onClose={() => {
      setDrawerOpen(false);
    }}
    onOpen={() => {
      setDrawerOpen(true);
    }}
  >
    <Drawer.Content>
      <Drawer.Header>Drawer Title</Drawer.Header>
      <Drawer.Body>
        <h3>Body</h3>
        <p>본문내용</p>
        <p>본문내용</p>
        <p>본문내용</p>
      </Drawer.Body>
      <Drawer.Footer>
        <Flex justify="space-around" items="center">
          <div>
            <Button
              color="red-base"
              onClick={e => {
                setDrawerOpen(false);
              }}
            >
              닫기
            </Button>
          </div>
          <div>
            <Button color="blue-base">저장</Button>
          </div>
        </Flex>
      </Drawer.Footer>
    </Drawer.Content>
  </Drawer>
</>
```

## Props

### Drawer

| Property | Allow Types       | Description                              | Default |
| -------- | ----------------- | ---------------------------------------- | ------- |
| children | `React.ReactNode` | Drawer의 자식 요소 입니다.               |         |
| open     | `boolean`         | Drawer의 `open` 상태를 지정합니다.       | `false` |
| full     | `boolean`         | full size 형태의 Drawer로 사용합니다.    | `false` |
| onOpen   | `() => void`      | Drawer가 열릴 때 발생하는 이벤트 입니다. |         |
| onClose  | `() => void`      | Drawer가 닫힐 때 발생하는 이벤트 입니다. |         |

### Drawer.Header

| Property | Allow Types       | Description                     | Default |
| -------- | ----------------- | ------------------------------- | ------- |
| children | `React.ReactNode` | Drawer.Header 자식 요소 입니다. |         |

### Drawer.Body

| Property | Allow Types       | Description                             | Default |
| -------- | ----------------- | --------------------------------------- | ------- |
| children | `React.ReactNode` | Drawer.Body 자식 요소 자식 요소 입니다. |         |

### Drawer.Footer

| Property | Allow Types       | Description                               | Default |
| -------- | ----------------- | ----------------------------------------- | ------- |
| children | `React.ReactNode` | Drawer.Footer 자식 요소 자식 요소 입니다. |         |
