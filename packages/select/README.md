# select

## 가장 기본적인 설계

```tsx
// select.tsx

interface Props {
  value?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
}

export function Select({ children }) {
  // 1. open인지 아닌지 상태
  // 1-1. open일 때, option 목록을 보여준다.
  //
  return (

  )
}

function SelectOption {
  // 1-1. option을 클릭하면 현재 value를 업데이트 하고
  // 1-2. close 한다.
}

Select.Option = SelectOption;
```

## stoybook

```tsx
// select.stories.tsx
function Main() {
  // [value, setValue] = useState(null);

  return (
    <>
      <Select value={value} onValueChange={x => setValue(x)}>
        <Select.Option value="react">리액트</Select.Option>
        <Select.Option value="solid">쏠리드</Select.Option>
        <Select.Option value="qwik">퀴이익</Select.Option>
        // 도전과제
        <Select.Value />
      </Select>
      <div>{value}</div>
    </>
  );
}
```

## 추가적인 요소

1. 구현이 필요한 기본적인 기능들, 상태들 정의
2. Select 기본 기능들 추가해주기 (4점)
   1. defaultValue
   2. placeholder
   3. readonly
   4. disabled
3. div에 생명 불어넣기 (3점)
   1. focused 라는 상태를 추가해서
   2. aria-\*
4. UX (2점)
   1. 펼쳐지는 방향 결정하기

- 키보드 제어 처리
- <Value>

* [ ]

1. 키보드 네비게이션 처리
2. value없을 때 첫 value-> firstChild
3. disabled 처리
