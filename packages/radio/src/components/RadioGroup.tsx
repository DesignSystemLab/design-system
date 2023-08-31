import { forwardRef } from 'react';
import { createClassVariant } from '@jdesignlab/theme';
import { RadioProvider } from './RadioProvider';
import useRadioGroup from '../hooks/useRadioGroup';
import type { RadioGroupProps } from '../types';

const RadioGroup = Object.assign(
  forwardRef<HTMLInputElement, RadioGroupProps>((props: RadioGroupProps, ref) => {
    const { children, defaultValue = null, ...restProps } = props;
    const radioGroupRef = useRadioGroup(defaultValue, ref);

    return (
      <RadioProvider defaultValue={defaultValue} rootProps={restProps}>
        <div ref={radioGroupRef} role="radiogroup" className={createClassVariant('radio', 'wrapper', 'group')}>
          {children}
        </div>
      </RadioProvider>
    );
  })
);

RadioGroup.displayName = 'RadioGroup';
export default RadioGroup;
