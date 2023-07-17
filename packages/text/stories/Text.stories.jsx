import { Text } from '../src';
import { ThemeContext, themePreset, ThemeProvider } from '@jdesignlab/j-provider';

export default {
  title: 'Typography/Text',
  component: Text,
  decorators: [Story => <Story />]
};

export const Typography = () => (
  <>
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
  </>
);

export const FontStyle = () => {
  return (
    <ThemeProvider>
      <Text variant="heading" color="primary-500">
        Decoration
      </Text>
      <Text decoration="line-through">Line-through</Text>
      <Text decoration="overline">Line-through</Text>
      <Text decoration="underline">underLine</Text>
      <hr />
      <Text variant="heading" color="primary-500">
        Align
      </Text>
      <Text align="start">Align Start</Text>
      <Text align="center">Align Center</Text>
      <Text align="end">Align End</Text>
      <hr />
      <Text variant="heading" color="primary-500">
        Font-Style
      </Text>
      <Text fontStyle="italic">italic</Text>
      <Text fontStyle="oblique">oblique</Text>
    </ThemeProvider>
  );
};
