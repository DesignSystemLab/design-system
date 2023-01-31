import React, {Fragment} from 'react';
import {Button} from '../src';
import variantPresetColors from '@jdesignlab/theme';

function getVariantPresetColors() {
    const colors = [];
    for (const color in variantPresetColors) {
        const colorProps = variantPresetColors[color];
        for (const colorProp in colorProps) {
            colors.push(`${color}.${colorProp}`);
        }
    }
    return colors;
}

export default {
    title: 'Button',
    component: Button,
    decorators: [
        (Story: any) => (
            <div style={{display: 'flex', flexDirection: 'column', marginTop: '8px', gap: '8px'}}>
                <Story />
            </div>
        )
    ],

    argTypes: {
        size: {
            description: 'Button Size',
            control: {
                type: 'select',
                required: false
            },
            options: ['sm', 'md', 'lg', 'xl']
        },
        color: {
            description: 'Button Colors',
            control: {
                type: 'select',
                required: false
            },
            options: getVariantPresetColors()
        },
        state: {
            description: 'Button State',
            control: {
                type: 'select',
                required: false
            },
            options: ['fill', 'ghost', 'outline', 'disabled']
        },
        children: {
            description: 'button text',
            control: {
                type: 'text'
            }
        }
    }
};

export const ButtonFill = args => (
    <Fragment>
        <Button {...args}></Button>
        <Button>Default Button</Button>
        <Button size="lg" state="fill">
            Large Button
        </Button>
        <Button size="xl" state="fill">
            X-Large Button
        </Button>
        <Button state="disabled">Button Disabled</Button>
        <Button state="outline" size="xl">
            Outline Button
        </Button>
        <Button state="ghost">Ghost Button</Button>
    </Fragment>
);
