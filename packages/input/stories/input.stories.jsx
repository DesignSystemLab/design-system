import { TextInput } from '../src';
import { VisibleIcon } from '@jdesignlab/theme';

export default {
    title: 'Components/TextInput',
    component: TextInput,
    decorators: [
        Story => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Story />
            </div>
        )
    ]
};

const argTypes = {
    defaultValue: {
        name: 'defaultValue',
        type: { name: 'string', required: false },
        description: 'input defaultValue',
        control: 'text'
    },
    label: {
        name: 'label',
        type: { name: 'string', required: false },
        description: 'input label',
        control: 'text'
    },
    placeholder: {
        name: 'placeholder',
        type: { name: 'string', required: false },
        description: 'input placeholder',
        control: 'text'
    },
    variant: {
        name: 'variant',
        type: { name: 'string', required: false },
        description: 'input variant',
        control: {
            type: 'select',
            options: ['outline', 'filled', 'solo']
        }
    },
    inputSize: {
        name: 'inputSize',
        type: { name: 'string', required: false },
        description: 'input size',
        control: { type: 'radio', options: ['sm', 'md', 'lg', 'xl'] }
    }
};

const Template = args => <TextInput {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
Basic.argTypes = argTypes;

export const WithColors = () => (
    <>
        <TextInput type="text" label="id" />
        <TextInput type="password" label="password" append={<span>show</span>} />
    </>
);

export const WithRight = () => (
    <>
        {/* <TextInput prepend={<span>left</span>} /> */}
        <TextInput label="append string" append={<span>right</span>} />
        <TextInput type="password" label="append icon" append={<VisibleIcon />} />
        <TextInput type="password" label="append icon" visible />
        <TextInput
            label="append icon"
            clearable
            onChange={e => {
                console.log(e.target.value);
            }}
        />
    </>
);

export const WithVaraints = () => (
    <>
        <TextInput variant="outline" inputSize="sm" label="outline" />
        <TextInput variant="outline" inputSize="md" placeholder="placeholder" />
        <TextInput variant="outline" inputSize="lg" label="outline" placeholder="placeholder" />
        <TextInput variant="outline" inputSize="xl" />

        <TextInput variant="filled" inputSize="sm" label="filled" placeholder="placeholder" />
        <TextInput variant="filled" inputSize="md" label="filled" />
        <TextInput variant="filled" inputSize="lg" />
        <TextInput variant="filled" inputSize="xl" label="filled" />

        <TextInput variant="solo" inputSize="sm" label="solo" />
        <TextInput variant="solo" inputSize="md" placeholder="only_placeholder" />
        <TextInput variant="solo" inputSize="lg" label="solo" placeholder="placeholder" />
        <TextInput variant="solo" inputSize="xl" />
        {/* <TextInput variant="flushed" label="flushed" /> */}
    </>
);

export const WithSizes = () => (
    <>
        <TextInput inputSize="sm" label="sm" />
        <TextInput inputSize="md" label="md" />
        <TextInput inputSize="lg" label="lg" />
        <TextInput inputSize="xl" label="xl" />
    </>
);

export const WithTypes = () => (
    <>
        <TextInput type="text" label="ID" />
        <TextInput type="password" label="password" />
        <TextInput type="text" label="ID" />
        <TextInput type="password" label="password" />
        <TextInput type="text" label="only label" />
        <TextInput placeholder="only placeholder" />
        <TextInput label="label" placeholder="placeholder" />
        <TextInput label="defaultValue" defaultValue="defaultValue" clearable />
        <TextInput variant="filled" value="disabled" disabled />
        <TextInput variant="outline" value="disabled" disabled />
        <TextInput variant="solo" value="disabled" disabled />
    </>
);

export const WithAttributes = () => {
    <form>
        <TextInput type="text" label="ID" />
        <TextInput type="password" label="password" />
        <TextInput type="text" label="only label" />
        <TextInput placeholder="only placeholder" />
        <TextInput label="label" placeholder="placeholder" />
        <TextInput label="defaultValue" defaultValue="defaultValue" />
        <TextInput variant="filled" value="disabled" disabled />
        <TextInput variant="outline" value="disabled" disabled />
        <TextInput variant="solo" value="disabled" disabled />
    </form>;
};
