/** @jsxImportSource @emotion/react */
import { createClassVariant } from '@jdesignlab/theme';
import { CheckboxGroupContext } from '../context';
import type { CheckboxGroupProps } from '../types';

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { children, defaultValue, ...otherProps } = props;
  const contextValue = {
    defaultValues: props.defaultValue ?? []
  };

  return (
    <CheckboxGroupContext.Provider value={contextValue}>
      <div role="group" className={createClassVariant('checkbox', 'group')} {...otherProps}>
        {children}
      </div>
    </CheckboxGroupContext.Provider>
  );
};

CheckboxGroup.displayName = 'Checkbox.Group';
