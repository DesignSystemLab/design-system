import { Tabs } from '../src';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  decorators: [Story => <Story />]
};

const argTypes = {
  button: {
    name: 'button'
  }
};

const Template = args => <Tabs {...args} />;

const onChange = () => {
  console.log('changed');
};
export const TabsBasic = () => (
  <>
    <Tabs defaultValue="tab1" variant="enclosed" size="sm" onChange={onChange}>
      <Tabs.List>
        {/* <Tabs.List full> */}
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
    <br />
    <Tabs defaultValue="tab1" variant="enclosed" size="md" onChange={onChange}>
      {/* <Tabs.List> */}
      <Tabs.List full>
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
    <br />
    <Tabs defaultValue="tab1" variant="enclosed" size="lg" onChange={onChange}>
      <Tabs.List>
        {/* <Tabs.List full> */}
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
    <br />

    <Tabs defaultValue="tab1" size="sm" variant="underline" onChange={onChange}>
      <Tabs.List>
        {/* <Tabs.List full> */}
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
    <br />

    <Tabs defaultValue="tab1" variant="underline" onChange={onChange}>
      <Tabs.List>
        {/* <Tabs.List full> */}
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
    <br />

    <Tabs defaultValue="tab1" size="lg" variant="underline" onChange={onChange}>
      {/* <Tabs.List> */}
      <Tabs.List full>
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
  </>
);
