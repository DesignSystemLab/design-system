import { Button } from '../src';

export default {
    title: 'Components/Button',
    component: Button,
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
        description: 'button color',
        control: 'text'
    },
    variant: {
        name: 'variant',
        type: { name: 'string', required: false },
        description: 'button variant',
        control: {
            type: 'select',
            options: ['solid', 'outline', 'ghost', 'link', 'unstyled']
        }
    },
    children: {
        name: 'children',
        type: { name: 'string', required: false },
        description: 'button label',
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: 'Button' }
        },
        control: 'text'
    },
    size: {
        name: 'size',
        type: { name: 'string', required: false },
        description: 'button size',
        control: { type: 'radio', options: ['sm', 'md', 'lg', 'xl'] }
    }
};

const Template = args => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    children: 'button',
    size: 'md'
};
Basic.argTypes = argTypes;

export const WithColors = () => (
    <>
        <Button color="amber">blue</Button>
        <Button color="lightGreen">lightGreen</Button>
        <Button color="blue-darken1">blue-darken1</Button>
        <Button color="red-lighten3">red-lighten3</Button>
        <Button color="pink-accent2">pink-accent2</Button>
        <Button>no color</Button>
    </>
);

export const WithVariants = () => (
    <>
        <Button variant="solid">solid</Button>
        <Button variant="outline">outline</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="link">link</Button>
        <Button variant="unstyled">unstyled</Button>
    </>
);

export const WithSizes = () => (
    <>
        <Button size="sm">Button</Button>
        <Button size="md">Button</Button>
        <Button size="lg">Button</Button>
        <Button size="xl">Button</Button>
    </>
);
