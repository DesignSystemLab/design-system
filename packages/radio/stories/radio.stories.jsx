import { variantPresetColors } from '@jdesignlab/theme';
import { Radio } from '../src';

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
    title: 'Components/Radio',
    component: Radio,
    decorators: [
        Story => (
            <div style={{ display: 'flex', gap: '5px' }}>
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
    children: {
        name: 'children',
        type: { name: 'string', required: false },
        description: 'default Value',
        control: 'text'
    },
    readonly: {
        name: 'readonly',
        type: { name: 'boolean', required: false },
        description: 'readonly',
        control: { type: 'radio', options: ['true', 'false'] }
    },
    disabled: {
        name: 'disabled',
        type: { name: 'string', required: false },
        description: 'radio disabled',
        control: { type: 'radio', options: ['true', 'false'] }
    }
};

const Template = args => <Radio {...args} />;

export const RadioBasic = Template.bind({});
RadioBasic.argTypes = argTypes;

export const RadioTempalte = () => (
    <>
        <Radio name="fruit" size="sm">
            sm-green
        </Radio>
        <Radio color="green-lighten3" disabled>
            md-disabled
        </Radio>
        <Radio readonly>readonly</Radio>
        <Radio name="fruit" value="asddas" />
        <Radio name="fruit" color="yellow-lighten3" onClick={e => alert(e.target.value)}>
            바나나
        </Radio>
        <Radio name="fruit" value="asd" color="purple-lighten3">
            포도
        </Radio>
        <Radio name="fruit" color="red-lighten2">
            딸기
        </Radio>
        <Radio name="fruit" size="lg" color="blue-lighten3">
            Sky Blue
        </Radio>
    </>
);
