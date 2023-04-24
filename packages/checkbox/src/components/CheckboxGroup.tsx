/** @jsxImportSource @emotion/react */
import { filterComponent } from '@jdesignlab/react-utils';
import { createClassVariant } from '@jdesignlab/theme';
import { Checkbox } from './Checkbox';
import { CheckboxGroupContext } from '../context';
import type { CheckboxGroupProps } from '../types';

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { children, defaultValue, ...otherProps } = props;
  const checkboxChildren = filterComponent(children, Checkbox, true);
  const contextValue = {
    defaultValues: props.defaultValue ?? []
  };

  return (
    <CheckboxGroupContext.Provider value={contextValue}>
      <div role="group" className={createClassVariant('checkbox', 'group')} {...otherProps}>
        {checkboxChildren}
      </div>
    </CheckboxGroupContext.Provider>
  );
};

CheckboxGroup.displayName = 'Checkbox.Group';
