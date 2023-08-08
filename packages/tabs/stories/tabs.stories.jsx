import React from 'react';
import { Tabs } from '../src';

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  decorators: [Story => <Story />]
};

const argTypes = {
  button: {
    name: 'Tabs'
  }
};

const Template = args => <Tabs {...args} />;

export const Basic = () => (
  <>
    <Tabs variant="enclosed">
      <Tabs.List>
        <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">tab2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">tab3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab, cum repellat perspiciatis distinctio
        doloremque at sint beatae omnis sapiente reiciendis dicta quae veniam. Unde consequatur voluptates maxime
        cupiditate!
      </Tabs.Content>
      <Tabs.Content value="tab2">content2</Tabs.Content>
      <Tabs.Content value="tab3">content3</Tabs.Content>
    </Tabs>
  </>
);

export const variant = () => (
  <>
    <Tabs variant="underline" size="lg">
      <Tabs.List>
        <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">tab2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">tab3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab, cum repellat perspiciatis distinctio
        doloremque at sint beatae omnis sapiente reiciendis dicta quae veniam. Unde consequatur voluptates maxime
        cupiditate!
      </Tabs.Content>
      <Tabs.Content value="tab2">content2</Tabs.Content>
      <Tabs.Content value="tab3">content3</Tabs.Content>
    </Tabs>
    <Tabs variant="enclosed" size="lg">
      <Tabs.List>
        <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">tab2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">tab3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab, cum repellat perspiciatis distinctio
        doloremque at sint beatae omnis sapiente reiciendis dicta quae veniam. Unde consequatur voluptates maxime
        cupiditate!
      </Tabs.Content>
      <Tabs.Content value="tab2">content2</Tabs.Content>
      <Tabs.Content value="tab3">content3</Tabs.Content>
    </Tabs>
    <Tabs variant="unstyled" size="lg">
      <Tabs.List>
        <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">tab2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">tab3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab, cum repellat perspiciatis distinctio
        doloremque at sint beatae omnis sapiente reiciendis dicta quae veniam. Unde consequatur voluptates maxime
        cupiditate!
      </Tabs.Content>
      <Tabs.Content value="tab2">content2</Tabs.Content>
      <Tabs.Content value="tab3">content3</Tabs.Content>
    </Tabs>
  </>
);

export const defaultValue = () => {
  return (
    <Tabs variant="enclosed" defaultValue="tab3">
      <Tabs.List>
        <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">tab2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">tab3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab, cum repellat perspiciatis distinctio
        doloremque at sint beatae omnis sapiente reiciendis dicta quae veniam. Unde consequatur voluptates maxime
        cupiditate!
      </Tabs.Content>
      <Tabs.Content value="tab2">content2</Tabs.Content>
      <Tabs.Content value="tab3">content3</Tabs.Content>
    </Tabs>
  );
};

export const onChange = () => {
  const onChange = () => {
    console.log('changed');
  };
  return (
    <Tabs variant="enclosed" onChange={onChange}>
      <Tabs.List>
        <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">tab2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">tab3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab, cum repellat perspiciatis distinctio
        doloremque at sint beatae omnis sapiente reiciendis dicta quae veniam. Unde consequatur voluptates maxime
        cupiditate!
      </Tabs.Content>
      <Tabs.Content value="tab2">content2</Tabs.Content>
      <Tabs.Content value="tab3">content3</Tabs.Content>
    </Tabs>
  );
};

export const disabled = () => {
  return (
    <Tabs variant="enclosed" baseColor="grey-lighten2">
      <Tabs.List>
        <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
        <Tabs.Trigger value="tab2" disabled>
          tab2
        </Tabs.Trigger>
        <Tabs.Trigger value="tab3">tab3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab, cum repellat perspiciatis distinctio
        doloremque at sint beatae omnis sapiente reiciendis dicta quae veniam. Unde consequatur voluptates maxime
        cupiditate!
      </Tabs.Content>
      <Tabs.Content value="tab2">content2</Tabs.Content>
      <Tabs.Content value="tab3">content3</Tabs.Content>
    </Tabs>
  );
};

export const lazy = () => {
  return (
    <Tabs variant="enclosed" lazy>
      <Tabs.List>
        <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">tab2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">tab3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab, cum repellat perspiciatis distinctio
        doloremque at sint beatae omnis sapiente reiciendis dicta quae veniam. Unde consequatur voluptates maxime
        cupiditate!
      </Tabs.Content>
      <Tabs.Content value="tab2">content2</Tabs.Content>
      <Tabs.Content value="tab3">content3</Tabs.Content>
    </Tabs>
  );
};

export const color = () => {
  return (
    <>
      <Tabs variant="enclosed" accentColor="primary-500" baseColor="primary-100">
        <Tabs.List>
          <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">tab2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">tab3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab, cum repellat perspiciatis distinctio
          doloremque at sint beatae omnis sapiente reiciendis dicta quae veniam. Unde consequatur voluptates maxime
          cupiditate!
        </Tabs.Content>
        <Tabs.Content value="tab2">content2</Tabs.Content>
        <Tabs.Content value="tab3">content3</Tabs.Content>
      </Tabs>
      <br />
      <Tabs variant="underline" accentColor="primary-500" baseColor="primary-100">
        <Tabs.List>
          <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">tab2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">tab3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab, cum repellat perspiciatis distinctio
          doloremque at sint beatae omnis sapiente reiciendis dicta quae veniam. Unde consequatur voluptates maxime
          cupiditate!
        </Tabs.Content>
        <Tabs.Content value="tab2">content2</Tabs.Content>
        <Tabs.Content value="tab3">content3</Tabs.Content>
      </Tabs>
      <br />
      <Tabs variant="unstyled" accentColor="primary-500" baseColor="primary-100">
        <Tabs.List>
          <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">tab2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">tab3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab, cum repellat perspiciatis distinctio
          doloremque at sint beatae omnis sapiente reiciendis dicta quae veniam. Unde consequatur voluptates maxime
          cupiditate!
        </Tabs.Content>
        <Tabs.Content value="tab2">content2</Tabs.Content>
        <Tabs.Content value="tab3">content3</Tabs.Content>
      </Tabs>
    </>
  );
};

export const size = () => {
  return (
    <>
      <Tabs variant="enclosed" size="sm">
        <Tabs.List>
          <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">tab2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">tab3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab, cum repellat perspiciatis distinctio
          doloremque at sint beatae omnis sapiente reiciendis dicta quae veniam. Unde consequatur voluptates maxime
          cupiditate!
        </Tabs.Content>
        <Tabs.Content value="tab2">content2</Tabs.Content>
        <Tabs.Content value="tab3">content3</Tabs.Content>
      </Tabs>
      <br />
      <Tabs variant="enclosed" size="md">
        <Tabs.List>
          <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">tab2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">tab3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab, cum repellat perspiciatis distinctio
          doloremque at sint beatae omnis sapiente reiciendis dicta quae veniam. Unde consequatur voluptates maxime
          cupiditate!
        </Tabs.Content>
        <Tabs.Content value="tab2">content2</Tabs.Content>
        <Tabs.Content value="tab3">content3</Tabs.Content>
      </Tabs>
      <br />
      <Tabs variant="enclosed" size="lg">
        <Tabs.List>
          <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">tab2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">tab3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab, cum repellat perspiciatis distinctio
          doloremque at sint beatae omnis sapiente reiciendis dicta quae veniam. Unde consequatur voluptates maxime
          cupiditate!
        </Tabs.Content>
        <Tabs.Content value="tab2">content2</Tabs.Content>
        <Tabs.Content value="tab3">content3</Tabs.Content>
      </Tabs>
      <br />
      <Tabs variant="underline" size="sm">
        <Tabs.List>
          <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">tab2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">tab3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab, cum repellat perspiciatis distinctio
          doloremque at sint beatae omnis sapiente reiciendis dicta quae veniam. Unde consequatur voluptates maxime
          cupiditate!
        </Tabs.Content>
        <Tabs.Content value="tab2">content2</Tabs.Content>
        <Tabs.Content value="tab3">content3</Tabs.Content>
      </Tabs>
      <br />
      <Tabs variant="underline" size="md">
        <Tabs.List>
          <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">tab2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">tab3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab, cum repellat perspiciatis distinctio
          doloremque at sint beatae omnis sapiente reiciendis dicta quae veniam. Unde consequatur voluptates maxime
          cupiditate!
        </Tabs.Content>
        <Tabs.Content value="tab2">content2</Tabs.Content>
        <Tabs.Content value="tab3">content3</Tabs.Content>
      </Tabs>
      <br />
      <Tabs variant="underline" size="lg">
        <Tabs.List>
          <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">tab2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">tab3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab, cum repellat perspiciatis distinctio
          doloremque at sint beatae omnis sapiente reiciendis dicta quae veniam. Unde consequatur voluptates maxime
          cupiditate!
        </Tabs.Content>
        <Tabs.Content value="tab2">content2</Tabs.Content>
        <Tabs.Content value="tab3">content3</Tabs.Content>
      </Tabs>
      <br />
      <Tabs variant="unstyled" size="sm">
        <Tabs.List>
          <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">tab2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">tab3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab, cum repellat perspiciatis distinctio
          doloremque at sint beatae omnis sapiente reiciendis dicta quae veniam. Unde consequatur voluptates maxime
          cupiditate!
        </Tabs.Content>
        <Tabs.Content value="tab2">content2</Tabs.Content>
        <Tabs.Content value="tab3">content3</Tabs.Content>
      </Tabs>
      <br />
      <Tabs variant="unstyled" size="md">
        <Tabs.List>
          <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">tab2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">tab3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab, cum repellat perspiciatis distinctio
          doloremque at sint beatae omnis sapiente reiciendis dicta quae veniam. Unde consequatur voluptates maxime
          cupiditate!
        </Tabs.Content>
        <Tabs.Content value="tab2">content2</Tabs.Content>
        <Tabs.Content value="tab3">content3</Tabs.Content>
      </Tabs>
      <br />
      <Tabs variant="unstyled" size="lg">
        <Tabs.List>
          <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">tab2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">tab3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab, cum repellat perspiciatis distinctio
          doloremque at sint beatae omnis sapiente reiciendis dicta quae veniam. Unde consequatur voluptates maxime
          cupiditate!
        </Tabs.Content>
        <Tabs.Content value="tab2">content2</Tabs.Content>
        <Tabs.Content value="tab3">content3</Tabs.Content>
      </Tabs>
      <br />
    </>
  );
};
