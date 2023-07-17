# text

Text 컴포넌트를 사용한다면, 목적에 맞는 컨텐츠를 표현하기 위해 간편하게 타이포그라피를 적용하실 수 있습니다.

## Usage

[Storybook](https://designsystemlab.github.io/design-system/?path=/docs/typography-text--basic)

```jsx
  <Text variant="heading" size="2xl">
    2XL Heading
  </Text>
  <Text variant="heading" size="xl">
    XL Heading
  </Text>
  <Text variant="heading" size="lg">
    Large Heading
  </Text>
  <Text variant="heading" size="md">
    Medium Heading
  </Text>
  <Text variant="heading" size="sm">
    Small Heading
  </Text>
  <hr />
  <Text variant="label" size="2xl">
    2XL Label
  </Text>
  <Text variant="label" size="xl">
    XL Label
  </Text>
  <Text variant="label" size="lg">
    Large Label
  </Text>
  <Text variant="label" size="md">
    Medium Label
  </Text>
  <Text variant="label" size="sm">
    Small Label
  </Text>
  <hr />
  <Text size="2xl">2XL Paragraph</Text>
  <Text size="xl">XL Paragraph</Text>
  <Text size="lg">Large Paragraph</Text>
  <Text size="md">Medium Paragraph</Text>
  <Text size="sm">Small Paragraph</Text>
```

## **Props**

### Text

| Property   | Allow Types                                  | Description                                                                        | Default     |
| ---------- | -------------------------------------------- | ---------------------------------------------------------------------------------- | ----------- |
| size       | `sm` `md` `lg` `xl` `2xl`                    | Text의 크기를 지정합니다.                                                          | `md`        |
| variant    | `paragraph` `label` `heading`                | Text의 스타일을 지정합니다.                                                        | `paragraph` |
| bold       | `light` `medium` `semi` `extra` `number`     | Text의 굵기를 지정합니다. 정의된 타입을 사용하거나 크기를 직접 정하실 수 있습니다. |             |
| decoration | `none` `underline` `line-through` `overline` | Text의 `decoration` 스타일을 지정합니다.                                           | `none`      |
| transform  | `none` `capitalize` `uppercase` `lowercase`  | Text의 `transform` 스타일을 지정합니다.                                            | `none`      |
| align      | `start` `end` `center` `justify`             | Text의 `align` 스타일을 지정합니다.                                                | `start`     |
| fontstyle  | `italic` `oblique` `normal`                  | Text의 `fontStyle` 스타일을 지정합니다.                                            | `normal`    |
| as         | `React.ElementType`                          | Element Type                                                                       | `p`         |
| color      | `ColorToken`                                 | 폰트의 Color 색상을 지정합니다.                                                    | `font`      |
