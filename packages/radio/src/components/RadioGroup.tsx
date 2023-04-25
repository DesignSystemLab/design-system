import { createClassVariant } from '@jdesignlab/theme';
import { RadioGroupProps } from '../types';
import { RadioProvider } from './RadioContext';
import useRadioGroup from '../hooks/useRadioGroup';

const RadioGroup = (props: RadioGroupProps) => {
  const { children, defaultValue = null, ...restProps } = props;
  const radioGroupRef = useRadioGroup(defaultValue);

  return (
    <RadioProvider defaultValue={defaultValue} rootProps={restProps}>
      <div ref={radioGroupRef} role="radiogroup" className={createClassVariant('radio', 'wrapper', 'group')}>
        {children}
      </div>
    </RadioProvider>
  );
};

export default RadioGroup;
