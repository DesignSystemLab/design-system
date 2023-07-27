# Tabs

사용자가 여러개의 탭 중 하나를 선택할 수 있는 UI 요소입니다. 각 탭은 관련된 컨텐츠를 표시하고, 사용자는 탭을 선택하여 해당 컨텐츠를 전환할 수 있습니다.

## Usage

[Storybook](https://designsystemlab.github.io/design-system/?path=/docs/navigation-tabs--basic)

```jsx
<Tabs>
  <Tabs.List>
    <Tabs.Trigger value="tab1" />
    <Tabs.Trigger value="tab2" />
  </Tabs.List>
  <Tabs.Content value="tab1" />
  <Tabs.Content value="tab2" />
</Tabs>
```

## Props

### Tabs

| Property     | Allow Types            | Description                                                    | Default     |
| ------------ | ---------------------- | -------------------------------------------------------------- | ----------- |
| variant      | `enclosed` `underline` | 컴포넌트의 스타일을 변형합니다.                                | `underline` |
| defaultValue | `string`               | 탭의 `value`로 초기 렌더링 시 선택될 탭을 지정합니다.          | `undefined` |
| onChange     | `() => void`           | 탭이 변경될 때 발생하는 이벤트를 지정합니다.                   | `undefined` |
| size         | `sm` `md` `lg`         | 컴포넌트의 크기를 조정합니다.                                  | `md`        |
| lazy         | `boolean`              | 탭의 내용을 지연 로딩하여 필요한 때만 렌더링하도록 지정합니다. | `false`     |
| full         | `boolean`              | 컴포넌트가 부모 컨테이너의 전체너비를 차지하도록 지정합니다.   | `false`     |

### Tabs.List

| Property | Allow Types | Description | Default |
| -------- | ----------- | ----------- | ------- |

### Tabs.Trigger

| Property | Allow Types | Description                                                        | Default  |
| -------- | ----------- | ------------------------------------------------------------------ | -------- |
| value    | `string`    | 각 트리거의 값을 지정해 화면에 보여줄 `Tabs.Content`와 연결합니다. | `bottom` |
| disabled | `boolean`   | 탭을 비활성화합니다.                                               | `false`  |

### Tabs.Content

| Property | Allow Types | Description                                                                  | Default  |
| -------- | ----------- | ---------------------------------------------------------------------------- | -------- |
| value    | `string`    | 값을 지정해 동일한 값을 가진 `Tabs.Trigger`가 선택될 경우 화면에 보여줍니다. | `bottom` |
