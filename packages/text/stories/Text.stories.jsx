import { Text } from '../src';

export default {
  title: 'Typography/Text',
  component: Text,
  decorators: [Story => <Story />]
};

export const Basic = args => <Text {...args}>Text</Text>;

export const Size = () => (
  <>
    <Text size="sm">Small</Text>
    <Text>Medium</Text>
    <Text size="lg">Large</Text>
    <Text size="xl">X-Large</Text>
    <Text size="2xl">2X-Large</Text>
  </>
);

export const Variant = () => {
  return (
    <>
      <Text variant="heading">Heading</Text>
      <Text variant="paragraph">Paragraph</Text>
      <Text variant="label">Label</Text>
    </>
  );
};

export const Transform = () => {
  return (
    <>
      <Text transform="capitalize">capitalize</Text>
      <Text transform="lowercase">Lowercase</Text>
      <Text transform="uppercase">Uppercase</Text>
    </>
  );
};

export const Decoration = () => {
  return (
    <>
      <Text decoration="overline">Overline</Text>
      <Text decoration="underline">Underline</Text>
      <Text decoration="line-through">Line Through</Text>
    </>
  );
};

export const Align = () => {
  return (
    <>
      <Text align="start">Start</Text>
      <Text align="center">Center</Text>
      <Text align="end">End</Text>
    </>
  );
};

export const Color = () => {
  return (
    <>
      <Text color="primary-500">Primary</Text>
      <Text color="secondary-500">Secondary</Text>
      <Text color="orange-base">Orange</Text>
      <Text color="red-base">Red</Text>
      <Text color="green-base">Green</Text>
    </>
  );
};

export const FontStyle = () => {
  return (
    <>
      <Text fontStyle="italic">italic</Text>
      <Text fontStyle="oblique">oblique</Text>
    </>
  );
};

export const Bold = () => {
  return (
    <>
      <Text bold="light">light</Text>
      <Text bold="medium">medium</Text>
      <Text bold="semi">semi-bold</Text>
      <Text bold="extra">extra</Text>
      <Text bold={900}>900</Text>
    </>
  );
};
