# Popover

Popover 컴포넌트는 특정 요소 위에 표시 할 내용을 띄울 수 있습니다.

## Usage

[Storybook](https://designsystemlab.github.io/design-system/?path=/docs/actions-popover--basic)

```jsx
export const PopoverExample = () => {
  const [isOpen, setPopoverOpen] = useState(false);
  return (
    <Popover
      open={isOpen}
      onOpen={() => {
        setPopoverOpen(true);
      }}
      onClose={() => {
        setPopoverOpen(false);
      }}
    >
      <Popover.Trigger>
        <Button color="blue-lighten2">Left Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Header>Confirm</Popover.Header>
        <Popover.Body>Popover Content</Popover.Body>
        <Popover.Footer>
          <Flex gap="8px" justify="flex-end" items="center">
            <Button
              size="sm"
              color="shades-white"
              onClick={e => {
                setPopoverOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button size="sm" color="blue-lighten2">
              Apply
            </Button>
          </Flex>
        </Popover.Footer>
      </Popover.Content>
    </Popover>
  );
};
```

## Props

### Popover

| Property | Allow Types                   | Description                               | Default  |
| -------- | ----------------------------- | ----------------------------------------- | -------- |
| open     | `top`,`right`,`bottom`,`left` | Popover가 열리는 방향을 지정합니다.       | `bottom` |
| open     | `boolean`                     | Popover의 `open` 상태를 지정합니다.       | `false`  |
| arrow    | `boolean`                     | Popover의 arrow 여부를 지정합니다.        | `true`   |
| onOpen   | `() => void`                  | Popover가 열릴 때 발생하는 이벤트 입니다. |          |
| onClose  | `() => void`                  | Popover가 닫힐 때 발생하는 이벤트 입니다. |          |

### Popover.Trigger

| Property | Allow Types       | Description                                                | Default |
| -------- | ----------------- | ---------------------------------------------------------- | ------- |
| children | `React.ReactNode` | Popover `open` 이벤트를 발생시킬 수 있는 자식 요소 입니다. |         |
