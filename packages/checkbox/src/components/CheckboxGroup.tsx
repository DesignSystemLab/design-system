/** @jsxImportSource @emotion/react */
import { createClassVariant } from '@jdesignlab/theme';
import { useMemo } from 'react';
import { CheckboxGroupContext } from '../context';
import type { CheckboxGroupProps } from '../types';

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { children, defaultValue, ...otherProps } = props;

  const contextValue = useMemo(
    () => ({
      defaultValues: defaultValue ?? []
    }),
    [defaultValue]
  );

  return (
    <CheckboxGroupContext.Provider value={contextValue}>
      <div role="group" className={createClassVariant('checkbox', 'group')} {...otherProps}>
        {children}
      </div>
    </CheckboxGroupContext.Provider>
  );
};

CheckboxGroup.displayName = 'Checkbox.Group';
