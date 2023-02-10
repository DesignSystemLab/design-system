import TextArea from '../src/textarea';
import { variantPresetColors } from '@jdesignlab/theme';

function getVariantPresetColors() {
    const colors = [];
    for (const color in variantPresetColors) {
        const colorProps = variantPresetColors[color];
        for (const colorProp in colorProps) {
            colors.push(`${color}-${colorProp}`);
        }
    }
    return colors;
}

export default {
    title: 'Components/TextArea',
    component: TextArea,
    decorators: [
        Story => (
            <div style={{ display: 'flex', gap: '5px', flexDirection: 'column' }}>
                <Story />
            </div>
        )
    ]
};

const argTypes = {
    color: {
        name: 'color',
        type: { name: 'string', required: false },
        description: 'textarea color',
        control: { type: 'select', options: getVariantPresetColors() }
    },
    maxWidth: {
        name: 'maxWidth',
        type: { name: 'number', required: false },
        description: 'Set Textarea max-width',
        control: 'number'
    },
    maxHeight: {
        name: 'maxHeight',
        type: { name: 'number', required: false },
        description: 'Set Textarea max-height',
        control: 'number'
    },
    defaultValue: {
        name: 'defaultValue',
        type: { name: 'string', required: false },
        description: 'default Value',
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: 'Button' }
        },
        control: 'text'
    },
    appearance: {
        name: 'appearance',
        type: { name: 'string', required: false },
        description: 'Set Textarea set apperance',
        control: { type: 'radio', options: ['standard', 'none'] }
    },
    resize: {
        name: 'resize',
        type: { name: 'string', required: false },
        description: 'textarea resize',
        control: { type: 'radio', options: ['vertical', 'horizontal', 'smart', 'none'] }
    }
};

const Template = args => <TextArea {...args} />;

export const TextAreaBasic = Template.bind({});
TextAreaBasic.argTypes = argTypes;

export const Example = () => (
    <>
        <TextArea width={200} defaultValue="hello!" appearance="none" onChange={e => console.log(e.target.value)} resize="smart" />
        <TextArea maxWidth={640} defaultValue={'안녕하세요.'} resize="horizontal" />
        <TextArea maxWidth={640} defaultValue={'Red Style!'} color="red-darken4" resize="none" />
        <TextArea maxWidth={640} onClick={e => alert(e.target.value)} defaultValue={'Click to Alert Message!'} color="green-base" resize="none" />
    </>
);
