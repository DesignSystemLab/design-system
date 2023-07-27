# Dropdown

사용자에게 선택할 수 있는 옵션들을 제공해줍니다.

## Usage

[Storybook](https://designsystemlab.github.io/design-system/?path=/docs/layout-dropdown--basic)

```jsx
<Dropdown>
  <Dropdown.Trigger />
  <Dropdown.Menu>
    <Dropdown.MenuItem />
    <Dropdown.MenuItem hasSub>
      <Dropdown.SubMenu>
        <Dropdown.SubMenuItem />
      </Dropdown.SubMenu>
    </Dropdown.MenuItem>
  </Dropdown.Menu>
</Dropdown>
```

## Props

### Dropdown

| Property  | Allow Types                   | Description                                   | Default  |
| --------- | ----------------------------- | --------------------------------------------- | -------- |
| width     | `number`                      | 드랍다운 메뉴의 가로 너비를 지정합니다        | `200`    |
| placement | `top` `right` `bottom` `left` | 드랍다운 메뉴의 위치를 지정합니다.            | `bottom` |
| gap       | `number` `string`             | 트리거 컴포넌트와 메뉴간의 간격을 지정합니다. | `0`      |

### Dropdown.MenuItem

| Property | Allow Types  | Description                                                                                     | Default     |
| -------- | ------------ | ----------------------------------------------------------------------------------------------- | ----------- |
| onClick  | `() => void` | 아이템 클릭 시 이벤트를 호출합니다                                                              | `undefined` |
| disabled | `boolean`    | 해당 아이템을 비활성화합니다.                                                                   | `false`     |
| hasSub   | `boolean`    | 해당 아이템에 서브메뉴가 있음을 지정해줍니다. (`Dropdown.SubMenu`로 서브메뉴를 만들어아합니다.) | `false`     |

### Dropdown.SubMenuItem

| Property | Allow Types  | Description                        | Default     |
| -------- | ------------ | ---------------------------------- | ----------- |
| onClick  | `() => void` | 아이템 클릭 시 이벤트를 호출합니다 | `undefined` |
| disabled | `boolean`    | 해당 아이템을 비활성화합니다.      | `false`     |
