import { RadioContext } from '../context';
import { useId, useState } from 'react';
import { RADIO_NAME_PREFIX } from '../constants';

export const RadioProvider = ({ ...props }) => {
  const { children, defaultValue = null, rootProps = null } = props;
  const defaultName = rootProps && rootProps.name ? rootProps.name : `${RADIO_NAME_PREFIX}_${useId()}`;
  const [value, setValue] = useState<string>('');

  return (
    <RadioContext.Provider
      value={{
        setValue,
        value,
        defaultValue,
        name: defaultName,
        rootProps: { ...rootProps }
      }}
    >
      {children}
    </RadioContext.Provider>
  );
};
